import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./imageSlice/imageSlice";
export const store = configureStore({
  reducer: {
    imageGallery: imageSlice,
  },
});
