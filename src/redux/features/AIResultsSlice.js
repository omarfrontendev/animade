import { createSlice } from "@reduxjs/toolkit";
import { textToImage } from "../services/textToImage";

const initialState = {
  isLoading: false,
  resluts: null,
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
      state.resluts = null;
    });
    builder.addCase(textToImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.resluts = action.payload.output;
      state.isError = action.payload;
    });
    builder.addCase(textToImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isError = null;
      state.resluts = null;
    });
  },
});

export default AIResultsSlice.reducer;
