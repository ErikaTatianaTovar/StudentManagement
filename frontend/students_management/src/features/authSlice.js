import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    register: (state, action) => {
      // Aquí manejarías la lógica de registro.
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
