import { AddImageSvg } from "@/svgs/svg";
export function AddImage() {
  return (
    <div className="border-2 border-dashed flex flex-col items-center justify-center h-42 md:h-auto">
      <AddImageSvg className="w-7 h-7" />
      <h2>Add Image</h2>
    </div>
  );
}
