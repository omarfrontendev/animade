import { createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config";
import axios from "axios";

export const textToImage = createAsyncThunk(
  "AIResults/textToImage",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const jsone = JSON.stringify({
        key: `${config.STABLE_KEY}`,
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

      const res = await axios.post(`${config.STABLE_URL}/v3/text2img`, jsone, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
