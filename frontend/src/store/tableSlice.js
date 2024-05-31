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
                total: 0,
                items: []
            }
            state.tables.push(table)
        },
        additem: (state, action) =>{
            let itemInfo = action.payload;
            let cur = state.tables[state.currentTableIdx].items.find(item => item.name == itemInfo.name)
            if(cur){
                cur.quantity += 1;
            }else{
                state.tables[state.currentTableIdx].items.push(itemInfo);
            }
        },
        updateItem: (state, action) =>{
            let{itemIdx, quantity} = action.payload;
            state.tables[state.currentTableIdx].items[itemIdx].quantity = quantity;
        },
        setCurrentTable: (state, action)=>{
            state.currentTableIdx = action.payload;
        },
        recalculate: (state)=>{
            let cur = state.tables[state.currentTableIdx]
            cur.total = cur.items.reduce((acc, val)=> acc + (val.price * val.quantity), 0);
        }

    }
});

export const {newTable, additem, setCurrentTable, updateItem, recalculate} = tableSlice.actions;

export default tableSlice.reducer;
