import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Event name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Event description is required"],
    },

    eventType: {
      type: String,
      required: [true, "Event type is required"],
      enum: ["education", "environment", "kindness", "community", "other"],
      lowercase: true,
    },

    image: {
      public_id: String,
      url: String,
    },

    date: {
      type: Date,
      required: [true, "Event date is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);
