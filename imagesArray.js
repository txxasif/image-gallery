export const imagesLocation = [
  { src: "https://i.ibb.co/6JHnVF2/image-1.webp", isSelected: false, id: "v" },
  { src: "https://i.ibb.co/Lnp8RgY/image-2.webp", isSelected: false, id: "p" },
  { src: "https://i.ibb.co/4ZHQx20/image-3.webp", isSelected: false, id: "n" },
  { src: "https://i.ibb.co/p0S6dZK/image-4.webp", isSelected: false, id: "y" },
  { src: "https://i.ibb.co/89jLjKh/image-5.webp", isSelected: false, id: "l" },
  { src: "https://i.ibb.co/stHVsbk/image-6.webp", isSelected: false, id: "j" },
  { src: "https://i.ibb.co/kqb0Tsk/image-7.webp", isSelected: false, id: "c" },
  { src: "https://i.ibb.co/zfvNZmH/image-8.webp", isSelected: false, id: "w" },
  { src: "https://i.ibb.co/K7HXg7c/image-9.webp", isSelected: false, id: "x" },
  { src: "https://i.ibb.co/djqkB7L/image-10.jpg", isSelected: false, id: "z" },
  { src: "https://i.ibb.co/d4G6cph/image-11.jpg", isSelected: false, id: "a" },
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
