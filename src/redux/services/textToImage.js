import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const textToImage = createAsyncThunk(
  "AIResults/textToImage",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const jsone = JSON.stringify({
        key: "kj36kb5bvU5gR8liQoTHe4T1IBHentRZYqqwuVb0cEozZPb3fiUM51jjVaCp",
        // key: `${process.env.AI__KEY}`,
        prompt: data.prompt,
        negative_prompt: data.prompt,
        width: "512",
        height: "512",
        samples: data.samples,
        num_inference_steps: "20",
        seed: null,
        guidance_scale: 7.5,
        webhook: null,
        track_id: null,
      });

      const res = await axios.post(
        "https://stablediffusionapi.com/api/v3/text2img",
        jsone,
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
