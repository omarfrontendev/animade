import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_API_URL}/login/`,
        JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        {
          redirect: "follow",
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
