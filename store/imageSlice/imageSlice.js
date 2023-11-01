import { imagesLocation } from "@/imagesArray";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalCount: 0,
  images: imagesLocation,
};
export const images = createSlice({
  name: "imageGallery",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setIsChecked: (state, action) => {
      const index = action.payload;
      const check = state.images[index].isSelected;
      let count = 0;
      if (check) {
        count = state.totalCount - 1;
      } else {
        count = state.totalCount + 1;
      }
      state.images[index].isSelected = !check;
      state.totalCount = count;
    },
  },
});
export const { setImages, setCount, setIsChecked } = images.actions;
export default images.reducer;
