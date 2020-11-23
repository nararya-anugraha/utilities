const reader = new FileReader();
const imageObject = new Image();

reader.addEventListener("load", () => {
  const { result = "" } = reader;
  imageObject.src = result;
});

const getImageSrc = (file) => {
  return new Promise((resolve) => {
    imageObject.addEventListener("load", () => {
      const { src } = imageObject;
      resolve(src);
    });
    reader.readAsDataURL(file);
  });
};

export { getImageSrc };
