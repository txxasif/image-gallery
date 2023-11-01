"use client";
import { createSelector } from "@reduxjs/toolkit";
const gallery = (state) => state.imageGallery;
export const getImagesSelector = createSelector(
  [gallery],
  (gallery) => gallery.images
);
export const getTotalCount = createSelector(
  [gallery],
  (gallery) => gallery.totalCount
);
