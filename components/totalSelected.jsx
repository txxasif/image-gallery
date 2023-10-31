import { Checkbox } from "./ui/checkbox";

export default function TotalSelected({ total, deleteSelectedImage }) {
  return (
    <div className="flex justify-between px-4  ">
      <div className="flex items-center justify-center gap-x-2 font-bold">
        <Checkbox checked={true} />
        <h3>
          {total} {total > 1 ? "Files" : "File"} Selected
        </h3>
      </div>
      <button className="text-red-600 font-bold" onClick={deleteSelectedImage}>
        Delete File
      </button>
    </div>
  );
}
