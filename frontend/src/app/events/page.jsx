"use client";

import { useEffect, useState } from "react";
import api from "../lib/axios";
import EventForm from "../components/EventForm";
import EventTable from "../components/EventTable";

export default function AdminEventsPage() {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const res = await api.get("/events");
    setEvents(res.data.events);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">
        🎉 Tatwamasi Events Dashboard
      </h1>

      <EventTable events={events} />
    </main>
  );
}
