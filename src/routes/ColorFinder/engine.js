import * as colorHex from "unify-token/build/v2/colors";

const hexToDec = (hexCode) => {
  try {
    const cleanedHex = hexCode.replace(/[^\da-f]/gi, "");
    console.log({ cleanedHex });
    let dec = parseInt(cleanedHex, 16);
    const b = dec % 256;
    dec = (dec - b) / 256;
    const g = dec % 256;
    const r = (dec - g) / 256;
    return [r, g, b];
  } catch (err) {
    return [0, 0, 0];
  }
};

const convertAndPad = (number) =>
  Math.min(number, 255).toString(16).padStart(2, "0").slice(-2);

const decToHex = (rgb) => {
  return rgb.map(convertAndPad).join("");
};

const colors = Object.entries(colorHex).map(([name, hexCode]) => ({
  name,
  hexCode,
  rgb: hexToDec(hexCode),
}));

const calculateDistance = (rgb1, rgb2) => {
  let total = 0;
  for (let i = 0; i < 3; i++) {
    total += (rgb1[i] - rgb2[i]) ** 2;
  }
  return total ** 0.5;
};

const getNearestColors = (input) => {
  const inputRgb = hexToDec(input);
  const colorsWithDistance = colors.map((color) => ({
    ...color,
    distance: calculateDistance(color.rgb, inputRgb),
  }));

  return colorsWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 5);
};

export { getNearestColors, hexToDec, decToHex };
