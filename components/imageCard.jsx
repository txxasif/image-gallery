"use client";
import Image from "next/image";
import { Checkbox } from "./ui/checkbox";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsChecked } from "@/store/imageSlice/imageSlice";
export function ImageCard({ index, image }) {
  const dispatch = useDispatch();
  const { isSelected, src, id } = image;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  function handle() {
    dispatch();
  }

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={
        index == 0
          ? "relative border shadow-md  col-span-2 row-span-2 group  hover:cursor-pointer"
          : "relative border shadow-md group hover:cursor-pointer"
      }
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => {
          dispatch(setIsChecked(index));
        }}
        className={
          isSelected
            ? "absolute  top-1 left-1 z-20 "
            : "absolute opacity-0 top-1 left-1 z-20 group-hover:opacity-100 max-h-48"
        }
      />
      <div class="absolute opacity-0 fd-sh group-hover:opacity-100 w-full h-full bg-black" />
      <Image
        className={
          isSelected
            ? "h-fit w-fit opacity-50"
            : "h-fit w-fit group-hover:opacity-50"
        }
        src={src}
        alt={src}
        width={500}
        height={500}
      />
    </div>
  );
}
