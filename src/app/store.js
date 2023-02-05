import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import expenseReducer from '../redux/expenseSlice';


export const store = configureStore({
  reducer: {
   // counter: counterReducer,
   expense: expenseReducer,
  },
  
});


