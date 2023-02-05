import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  allExpenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: INITIAL_STATE,
  reducers: {
    addExpense(state, action) {
      state.allExpenses.push(action.payload);
    },
    editExpense(state, action) {
      state.allExpenses.map((expense) => {
        if (expense.id === action.payload.id) {
          expense.name = action.payload.name;
          expense.dueDate = action.payload.dueDate;
          expense.recurring = action.payload.recurring;
          expense.id = action.payload.id;
        }
      });
    },
    deleteExpense(state, action) {
      state.allExpenses.splice(
        state.allExpenses.findIndex((item) => item.id === action.payload),
        1
      );
    },
  },
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
