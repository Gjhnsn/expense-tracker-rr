import { createSlice } from "@reduxjs/toolkit";

INITIAL_STATE = {
    id: 0,
    name: '',
    dueDate: '', 
    amount: '', 
    recurring: false
}

const expenseSlice = createSlice({
    name: 'expense',
    INITIAL_STATE,
    reducers: {
        addExpense(state, payload) {

            
        }
    }
})