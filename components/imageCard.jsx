import Image from "next/image";
import { Checkbox } from "./ui/checkbox";
export function ImageCard({
  index,
  image,
  onDragEnter,
  onDragStart,
  handleChange,
}) {
  const { isSelected, src } = image;
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(index)}
      onDragEnter={(e) => onDragEnter(index)}
      className={
        index == 0
          ? "relative border shadow-md  col-span-2 row-span-2 group  hover:cursor-pointer"
          : "relative border shadow-md group hover:cursor-pointer"
      }
    >
      <Checkbox
        type="checkbox"
        checked={isSelected}
        onClick={() => handleChange(index)}
        className="absolute top-1 left-1 z-20"
      />
      <Image
        className={
          isSelected
            ? "h-fit w-fit opacity-30"
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