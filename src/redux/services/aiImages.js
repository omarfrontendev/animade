import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const aiImages = createAsyncThunk(
  "AIResults/askAi",
  async (form, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: form.prompt,
          n: form.n,
          size: "1024x1024",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
