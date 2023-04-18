import { createSlice } from "@reduxjs/toolkit";
import { textToImage } from "../services/textToImage";
import { imageToImage } from "../services/imageToImage";

const initialState = {
  isLoading: false,
  textToImageResluts: null,
  imageToImageResluts: null,
  error: null,
  isError: null,
};

const AIResultsSlice = createSlice({
  name: "AIResults",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ============ Text 2 Image ===========
    builder.addCase(textToImage.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.isError = null;
      state.textToImageResluts = null;
    });
    builder.addCase(textToImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.textToImageResluts = action.payload.output;
      state.isError = action.payload;
    });
    builder.addCase(textToImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isError = null;
      state.textToImageResluts = null;
    });
    // ============ Image 2 Image ===========
    builder.addCase(imageToImage.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.isError = null;
      state.imageToImageResluts = null;
    });
    builder.addCase(imageToImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.imageToImageResluts = action.payload.output;
      state.isError = action.payload;
    });
    builder.addCase(imageToImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isError = null;
      state.imageToImageResluts = null;
    });
  },
});

export default AIResultsSlice.reducer;
