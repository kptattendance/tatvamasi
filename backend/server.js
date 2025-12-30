import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
dotenv.config();
import { clerkMiddleware } from "@clerk/express";
const app = express();

app.use(clerkMiddleware());
/* Middleware */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

/* Test route */
app.get("/", (req, res) => {
  res.json({ message: "Tatwamasi API running 🌱" });
});

console.log("Cloudinary key loaded:", !!process.env.CLOUDINARY_API_KEY);

/* Routes */
app.use("/api/events", eventRoutes);

/* =========================
   LOCAL DEVELOPMENT
========================= */
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;

  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  });
}

/* =========================
   VERCEL SERVERLESS
========================= */
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
