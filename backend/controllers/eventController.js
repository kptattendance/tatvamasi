import Event from "../models/Event.js";
import cloudinary from "../config/cloudinary.js";
/* =========================
   CREATE EVENT
========================= */

export const createEvent = async (req, res) => {
  try {
    const { name, description, eventType, date } = req.body;

    const event = await Event.create({
      name,
      description,
      eventType,
      date,
      image: req.cloudinaryResult
        ? {
            public_id: req.cloudinaryResult.public_id,
            url: req.cloudinaryResult.secure_url,
          }
        : undefined,
    });

    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =========================
   GET ALL EVENTS
========================= */
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
    });
  }
};

/* =========================
   GET SINGLE EVENT
========================= */
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch event",
    });
  }
};

/* =========================
   DELETE EVENT
========================= */

export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // 🔥 delete image from cloudinary
    if (event.image?.public_id) {
      await cloudinary.uploader.destroy(event.image.public_id);
    }

    await event.deleteOne();

    res.json({
      success: true,
      message: "Event and image deleted permanently",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
