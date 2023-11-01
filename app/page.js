"use client";
import { useReducer, useRef, useState } from "react";
import TotalSelected from "@/components/totalSelected";
import { AddImage } from "@/components/addImage";
import { ImageCard } from "@/components/imageCard";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useSelector, useDispatch } from "react-redux";
import { setCount, setImages } from "@/store/imageSlice/imageSlice";
import { indexFinder } from "@/imagesArray";
import { getImagesSelector, getTotalCount } from "@/store/imageSlice/selector";

export default function Home() {
  const images = useSelector(getImagesSelector);
  const total = useSelector(getTotalCount);
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensors = useSensors(pointerSensor);
  const dispatch = useDispatch();

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = indexFinder(images, active.id);
      const newIndex = indexFinder(images, over.id);
      const newData = arrayMove(images, oldIndex, newIndex);
      dispatch(setImages(newData));
    }
  }

  const handleDelete = () => {
    console.log("clicked");
    let temp = [...images];
    let filteredImagesArray = temp.filter((image) => !image.isSelected);
    dispatch(setImages(filteredImagesArray));
    dispatch(setCount(0));
  };

  return (
    <main className="max-h-full max-w-5xl mx-auto flex flex-col items-center justify-center py-5 border mt-2">
      <div className="w-full border-b py-1 ">
        {total ? (
          <TotalSelected deleteSelectedImage={handleDelete} total={total} />
        ) : (
          <h1 className="px-3 align-middle font-bold">Gallery</h1>
        )}
      </div>

      <div className="grid px-4 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3  py-3">
        <DndContext
          collisionDetection={closestCenter}
          sensors={sensors}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={images} strategy={rectSortingStrategy}>
            {images.map((image, index) => (
              <ImageCard key={index} index={index} image={image} />
            ))}
          </SortableContext>
        </DndContext>
        <AddImage />
      </div>
    </main>
  );
}
