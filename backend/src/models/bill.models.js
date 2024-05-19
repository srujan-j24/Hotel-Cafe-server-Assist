import mongoose from "mongoose";
const billItemSchema = new mongoose.Schema({
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    },
    quantity: {
        type: Number,
        default: 1
    },
    total: {
        type: Number,
        required: true
    }
});
const billSchema = new mongoose.Schema({
    item: {
        type: [billItemSchema],
    },
    person: {
        type: Number,
        default: 1
    }
        
}, {timestamps: true});

export const Bill = mongoose.model('Bill', billSchema);