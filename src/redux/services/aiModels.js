import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

export const aiModels = createAsyncThunk(
  "AIResults/aiModels",
  async (form, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `${config.OPEN_AI_URL}/v1/chat/completions`,
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: form.prompt }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.OPEN_AI_KEY}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
