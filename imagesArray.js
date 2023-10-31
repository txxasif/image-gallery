export const imagesLocation = [
  { src: "/images/image-2.webp", isSelected: false, id: "v" },
  { src: "/images/image-1.webp", isSelected: false, id: "p" },
  { src: "/images/image-3.webp", isSelected: false, id: "n" },
  { src: "/images/image-4.webp", isSelected: false, id: "y" },
  { src: "/images/image-5.webp", isSelected: false, id: "l" },
  { src: "/images/image-10.jpeg", isSelected: false, id: "m" },
  { src: "/images/image-11.jpeg", isSelected: false, id: "q" },
  { src: "/images/image-6.webp", isSelected: false, id: "j" },
  { src: "/images/image-7.webp", isSelected: false, id: "c" },
  { src: "/images/image-8.webp", isSelected: false, id: "w" },
  { src: "/images/image-9.webp", isSelected: false, id: "x" },
];

export function imagesReducer(state, action) {
  console.log(action.type, action.payload);
  switch (action.type) {
    case "images":
      return action.payload;
    case "select":
      state[action.payload].isSelected = !state[action.payload].isSelected;
      console.log(state);
      return state;
    default:
      return state;
  }
}
