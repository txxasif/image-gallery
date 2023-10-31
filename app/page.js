"use client";
import { imagesLocation } from "@/imagesArray";
import Image from "next/image";
import { useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import TotalSelected from "@/components/totalSelected";
import { AddImage } from "@/components/addImage";
import { ImageCard } from "@/components/imageCard";
export default function Home() {
  const [images, setImages] = useState(imagesLocation);
  const [totalSelectedImages, setTotalSelected] = useState(0);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = (dragItm, dragOverItm, isDraggedEnd) => {
    let fakeImages = [...images];
    const draggedItemContent = fakeImages.splice(dragItm, 1)[0];
    fakeImages.splice(dragOverItm, 0, draggedItemContent);
    setImages(fakeImages);
    if (isDraggedEnd) {
      dragItem.current = null;
      dragOverItem.current = null;
    }
  };
  const onDragStart = (idx) => {
    dragItem.current = idx;
  };
  const onDragEnter = (idx) => {
    dragOverItem.current = idx;
    handleSort(dragItem.current, idx, false);
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

    setImages(temp);
  };

  const handleDelete = () => {
    console.log("clicked");
    let temp = [...images];
    let filteredImagesArray = temp.filter((image) => !image.isSelected);
    setImages(filteredImagesArray);
    setTotalSelected(0);
  };

  return (
    <main className="max-h-fit max-w-5xl mx-auto flex flex-col items-center justify-center py-5 border mt-2">
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
      <div className="grid px-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3  py-3">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            index={index}
            image={image}
            onDragEnter={onDragEnter}
            onDragStart={onDragStart}
            handleChange={handleChange}
          />
        ))}
        <AddImage />
      </div>
    </main>
  );
}
