import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import { apiAuthSlice } from '../api/apiAuthSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiAuthSlice.middleware),
});