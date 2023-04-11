import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // code
        await mongoose.connect('mongodb://127.0.0.1:27017/products')
        console.log('Connected DB')
    } catch (err) {
        console.log(err)
    }
}