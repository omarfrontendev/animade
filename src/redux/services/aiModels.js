import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const aiModels = createAsyncThunk(
  "AIResults/aiModels",
  async (form, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: form.prompt }],
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
