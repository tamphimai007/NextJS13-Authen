import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    detail: {
        type: String
    },
    price: {
        type: Number,
        require: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

export default mongoose.models.Product || mongoose.model('Product', productSchema)