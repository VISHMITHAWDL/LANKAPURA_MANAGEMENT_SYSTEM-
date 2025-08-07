// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './manager/authSlice.jsx';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
