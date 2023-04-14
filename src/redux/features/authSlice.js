import { createSlice } from "@reduxjs/toolkit";
import { register } from "../services/register";
import { login } from "../services/login";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
  isLoaing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ========== Register ============== //
    builder.addCase(register.pending, (state) => {
      state.isLoaing = true;
      state.error = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoaing = false;
      state.error = false;
      if (action.payload.token) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      }
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoaing = false;
      state.error = action.payload;
    });
    // ========== Login ============== //
    builder.addCase(login.pending, (state) => {
      state.isLoaing = true;
      state.error = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoaing = false;
      state.error = false;
      console.log(action.payload);
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("token", JSON.stringify(action.payload.token));
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoaing = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
