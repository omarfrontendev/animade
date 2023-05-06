import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config";

export const imageToImage = createAsyncThunk(
  "AIResults/imageToImage",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const jsone = JSON.stringify({
        key: `${config.STABLE_KEY}`,
        prompt: data.prompt,
        negative_prompt: null,
        init_image: data.init_image,
        width: "512",
        height: "512",
        samples: data.samples,
        num_inference_steps: "30",
        safety_checker: "no",
        enhance_prompt: "yes",
        guidance_scale: 7.5,
        strength: 0.7,
        seed: null,
        webhook: null,
        track_id: null,
      });

      const res = await axios.post(`${config.STABLE_URL}/v3/img2img`, jsone, {
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
