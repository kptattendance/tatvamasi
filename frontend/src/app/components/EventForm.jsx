"use client";

import { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

export default function EventForm({}) {
  const { getToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    eventType: "education",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await getToken(); // 🔐 Clerk token

      const data = new FormData();
      data.append("name", form.name);
      data.append("description", form.description);
      data.append("eventType", form.eventType);
      data.append("date", form.date);

      if (form.image) {
        data.append("image", form.image); // must match upload.single("image")
      }

      // ✅ Debug (optional)
      console.log([...data.entries()]);

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Event created successfully");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-primary">
      <h2 className="text-2xl font-bold text-accent mb-6">
        🌱 Create New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Event Name"
          className="w-full border rounded-md px-4 py-2"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Event Description"
          className="w-full border rounded-md px-4 py-2"
          rows={4}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className="border rounded-md px-4 py-2"
          >
            <option value="education">📘 Education</option>
            <option value="environment">🌍 Environment</option>
            <option value="kindness">🤝 Kindness</option>
            <option value="community">🏘️ Community</option>
            <option value="other">✨ Other</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border rounded-md px-4 py-2"
            required
          />
        </div>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-primary hover:bg-accent text-black px-6 py-2 rounded-md transition"
        >
          {loading ? "Saving..." : "Create Event"}
        </button>
      </form>
    </div>
  );
}
