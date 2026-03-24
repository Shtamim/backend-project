import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import { connectDB } from "./db/db.js";

/*dotenv.config({
   path: './.env'
}); */

console.log("🚀 Starting app...");
console.log("MONGODB_URL:", process.env.MONGODB_URL);

const start = async () => {
   await connectDB();

   console.log("📦 DB connection function finished");
};

start();
