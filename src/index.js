import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
   path: './.env'
});

const PORT = process.env.PORT || 8000;

console.log("🚀 Starting app...");
console.log("MONGODB_URL:", process.env.MONGODB_URL);

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

const startServer = async () => {
    try {
        await connectDB();
        console.log("📦 DB connection established");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
