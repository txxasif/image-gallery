export const imagesLocation = [
  { src: "https://i.ibb.co/6JHnVF2/image-1.webp", isSelected: false, id: "1" },
  { src: "https://i.ibb.co/Lnp8RgY/image-2.webp", isSelected: false, id: "2" },
  { src: "https://i.ibb.co/4ZHQx20/image-3.webp", isSelected: false, id: "3" },
  { src: "https://i.ibb.co/p0S6dZK/image-4.webp", isSelected: false, id: "4" },
  { src: "https://i.ibb.co/89jLjKh/image-5.webp", isSelected: false, id: "5" },
  { src: "https://i.ibb.co/stHVsbk/image-6.webp", isSelected: false, id: "6" },
  { src: "https://i.ibb.co/kqb0Tsk/image-7.webp", isSelected: false, id: "7" },
  { src: "https://i.ibb.co/zfvNZmH/image-8.webp", isSelected: false, id: "8" },
  { src: "https://i.ibb.co/K7HXg7c/image-9.webp", isSelected: false, id: "9" },
  { src: "https://i.ibb.co/djqkB7L/image-10.jpg", isSelected: false, id: "10" },
  { src: "https://i.ibb.co/d4G6cph/image-11.jpg", isSelected: false, id: "11" },
];

export function indexFinder(ar, id) {
  console.log("hii");
  console.log(ar, id);
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
    if (ar[i].id === id) {
      return i;
    }
  }
}
