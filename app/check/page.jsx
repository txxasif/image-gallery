"use client";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Check() {
  const state = useSelector((state) => state.imageGallery);
  console.log(state);
  return (
    <main className="max-h-full max-w-5xl mx-auto flex flex-col items-center justify-center py-5 border mt-2">
      <div>Hi</div>
    </main>
  );
}
