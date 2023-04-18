import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const imageToImage = createAsyncThunk(
  "AIResults/imageToImage",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const jsone = JSON.stringify({
        key: "kj36kb5bvU5gR8liQoTHe4T1IBHentRZYqqwuVb0cEozZPb3fiUM51jjVaCp",
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

      const res = await axios.post(
        "https://stablediffusionapi.com/api/v3/img2img",
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
