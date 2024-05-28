import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        "Butter Chicken",
        "Tandoori Chicken",
        "Dosa",
        "Idli",
        "Samosa",
        "Palak Paneer",
        "Dal Makhani",
        "Biryani",
        "Naan",
        "Roti",
        "Vada",
        "Pav Bhaji",
        "Chole Bhature",
        "Aloo Gobi",
        "Rajma Masala",
        "Gulab Jamun",
        "Jalebi",
        "Rasmalai",
        "Samosa Chaat",
        "Chicken Tikka Masala",
        "Saag Paneer",
        "Masala Dosa",
        "Chicken 65",
        "Filter Coffee",
        "Aloo Tikki",
        "Bhel Puri",
        "Pani Puri",
        "Dahi Vada",
        "Lassi",
        "Pongal"
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
})