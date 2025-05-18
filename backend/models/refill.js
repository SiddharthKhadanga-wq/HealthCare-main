import mongoose from "mongoose";

const refillSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        ref: 'User'
    },
    medicine_name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    refill_date: {
        type: Date,
        default: Date.now
    }
});

const RefillModel = mongoose.model('Refill', refillSchema);
export default RefillModel;