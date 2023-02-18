import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../redux/expenseSlice';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, expenseReducer)

export const store = configureStore({
  reducer: {
   expense: persistedReducer,
  },
  middleware: [thunk]
});

export const persistor = persistStore(store)

