import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentTable: 1,
    tables : [

        {
            no: 1,
            status: 'vacant',
            people: 0,
            items: []
        },
        {
            no: 2,
            status: 'vacant',
            people: 0,
            items: []
        },
        {
            no: 3,
            status: 'vacant',
            people: 0,
            items: []
        },
        {
            no: 4,
            status: 'vacant',
            people: 0,
            items: []
        },
        {
            no: 5,
            status: 'vacant',
            people: 0,
            items: []
        },
        {
            no: 6,
            status: 'occupied',
            people: 0,
            items: []
        },
    ]
}

export const tableSlice = createSlice({
    name: 'tables',
    initialState,
    reducers: {
        newTable: (state, action) =>{
            const table = {
                no: action.payload.no,
                status: "vacant",
                people: action.payload.people,
                items: action.payload.items,
            }
            state.tables.push(table);
        },
        additems: (state, action) =>{
            const table_no = `table_${action.payload.no}`
            const previtems = state.tables[table_no].items;
            state.tables[table_no].items = {...previtems, ...action.payload.items};
        },
        setCurrentTable: (state, action)=>{
            state.currentTable = action.payload;
        }
    }
});

export const {newTable, additems, setCurrentTable} = tableSlice.actions;

export default tableSlice.reducer;
