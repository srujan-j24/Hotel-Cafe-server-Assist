import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    featuredImage: {
        type: String,
        default: 'nil'
    },
    isVeg:{
        type: Boolean,
        required: true
    },
    description:{
        type: String,
    }
}, {timestamps: true});

export const Food = mongoose.model('Food', foodSchema);