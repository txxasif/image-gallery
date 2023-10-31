"use client";
import { imagesLocation, imagesReducer } from "@/imagesArray";
import Image from "next/image";
import { useReducer, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import TotalSelected from "@/components/totalSelected";
import { AddImage } from "@/components/addImage";
import { ImageCard } from "@/components/imageCard";
const initial = {
  dragItem: 0,
  dragOverItem: 0,
};
function indexReducer(state, action) {
  switch (action.type) {
    case "dragItem":
      return { ...state, ["dragItem"]: action.payload };
    case "dragOverItem":
      return { ...state, ["dragOverItem"]: action.payload };
    default:
      return state;
  }
}
export default function Home() {
  const [images, setImages] = useReducer(imagesReducer, imagesLocation);
  const [totalSelectedImages, setTotalSelected] = useState(0);
  const [dragAndDropIndex, setDragAndDropIndex] = useReducer(
    indexReducer,
    initial
  );

  const handleSort = (dragItm, dragOverItm) => {
    let fakeImages = [...images];
    const [draggedItemContent] = fakeImages.splice(dragItm, 1);
    fakeImages.splice(dragOverItm, 0, draggedItemContent);
    if (dragAndDropIndex.dragItem >= 0 && dragAndDropIndex.dragOverItem >= 0) {
      setImages({
        type: "images",
        payload: fakeImages,
      });
    }
  };
  const onDragStart = (idx) => {
    setDragAndDropIndex({
      type: "dragItem",
      payload: idx,
    });
  };
  const onDragEnter = (idx) => {
    let fake = [...images];
    setDragAndDropIndex({
      type: "dragOverItem",
      payload: idx,
    });
    handleSort(dragAndDropIndex.dragItem, dragAndDropIndex.dragOverItem);
    //setImages(fake);
  };
  const onDragEnd = (e) => {
    // e.preventDefault();
    //handleSort(dragAndDropIndex.dragItem, dragAndDropIndex.dragOverItem);
  };

  const handleChange = (idx) => {
    let temp = [...images];
    let selectedValue = temp[idx].isSelected;
    if (selectedValue) {
      setTotalSelected((prev) => prev - 1);
    } else {
      setTotalSelected((prev) => prev + 1);
    }
    temp[idx].isSelected = !selectedValue;

    setImages({
      type: "images",
      payload: temp,
    });
  };

  const handleDelete = () => {
    console.log("clicked");
    let temp = [...images];
    let filteredImagesArray = temp.filter((image) => !image.isSelected);
    setImages({
      type: "images",
      payload: filteredImagesArray,
    });
    setTotalSelected(0);
  };

  return (
    <main className="max-h-full max-w-5xl mx-auto flex flex-col items-center justify-center py-5 border mt-2">
      <div className="w-full border-b py-1 ">
        {totalSelectedImages ? (
          <TotalSelected
            deleteSelectedImage={handleDelete}
            total={totalSelectedImages}
          />
        ) : (
          <h1 className="px-3 align-middle font-bold">Gallery</h1>
        )}
      </div>
      <div>{`Selected : ${dragAndDropIndex.dragItem} Over : ${dragAndDropIndex.dragOverItem}`}</div>
      <div className="grid px-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3  py-3">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            index={index}
            image={image}
            onDragEnter={onDragEnter}
            onDragStart={onDragStart}
            handleChange={handleChange}
            onDragEnd={onDragEnd}
          />
        ))}
        <AddImage />
      </div>
    </main>
  );
}
