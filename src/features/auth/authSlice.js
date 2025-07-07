import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isInitialized: false, // ⬅️ ini baru
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isInitialized = true; // ⬅️ tandai sudah selesai
    },
    clearUser: (state) => {
      state.user = null;
      state.isInitialized = true; // tetap true agar tahu sudah di-load
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
