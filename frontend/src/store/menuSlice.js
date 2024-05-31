import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foods: [
        { name: "Butter Chicken", price: 250 },
        { name: "Dosa (Masala)", price: 120 },
        { name: "Palak Paneer", price: 200 },
        { name: "Chole Bhature", price: 150 },
        { name: "Vada Pav", price: 40 },
        { name: "Biryani (Hyderabadi)", price: 300 },
        { name: "Samosa Chaat", price: 80 },
        { name: "Aloo Gobi", price: 180 },
        { name: "Dal Makhani", price: 220 },
        { name: "Idli Sambar", price: 80 },
        { name: "Pav Bhaji", price: 160 },
        { name: "Chicken Tikka Masala", price: 280 },
        { name: "Naan", price: 30 },
        { name: "Roti", price: 20 },
        { name: "Paratha", price: 40 },
        { name: "Gulab Jamun", price: 60 },
        { name: "Jalebi", price: 50 },
        { name: "Rasmalai", price: 80 },
        { name: "Samosa", price: 20 },
        { name: "Pakora", price: 70 },
        { name: "Onion Pakoda", price: 60 },
        { name: "Chicken 65", price: 220 },
        { name: "Filter Coffee", price: 30 },
        { name: "Masala Chai", price: 35 },
        { name: "Lassi (Sweet)", price: 50 },
        { name: "Lassi (Salty)", price: 40 },
        { name: "Mango Lassi", price: 70 },
        { name: "Pani Puri", price: 40 },
        { name: "Dahi Vada", price: 50 },
    ]
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        additem: (state, action) =>{
            state.menu.push(action.payload)
        }
    }
});

export const {additem} = menuSlice.actions;

export default menuSlice.reducer;