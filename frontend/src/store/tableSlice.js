import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentTableIdx: 0,
    tables: []
}

export const tableSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        newTable: (state) =>{
            const table = {
                no: (state.tables.length+1).toString().padStart(3, '0'),
                status: 'vacant',
                people: 0,
                items: [],
                total: 0
            }
            state.tables.push(table)
        },
        additems: (state, action) =>{
            
        },
        setCurrentTable: (state, action)=>{
                state.currentTableIdx = action.payload;
        }
    }
});

export const {newTable, additems, setCurrentTable} = tableSlice.actions;

export default tableSlice.reducer;
