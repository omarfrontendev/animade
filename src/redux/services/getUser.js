import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API_URL}/auth/user/`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
        },
        redirect: "follow",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
