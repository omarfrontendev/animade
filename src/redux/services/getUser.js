import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_API_URL}/auth/user/`,
      {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    return data;
    // =====================
  } catch (error) {
    return rejectWithValue(error);
  }
});
