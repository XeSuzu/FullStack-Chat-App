import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB conectado a: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB tuvo un error al conectarse:", error);
    }
}
