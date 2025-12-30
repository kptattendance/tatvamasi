import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
} from "../controllers/eventController.js";
import { uploadSingleImage } from "../middleware/uploadImage.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.post("/", authenticateUser, uploadSingleImage, createEvent);
router.delete("/:id", deleteEvent);

export default router;
