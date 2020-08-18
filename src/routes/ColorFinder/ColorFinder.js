import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { useFormik } from "formik";
import { N700 } from "unify-token/build/v2/colors";
import { hexToDec, decToHex, getNearestColors } from "./engine";

const initialValues = {
  hexCode: "000000",
  r: 0,
  g: 0,
  b: 0,
};

const colorFinderStyle = css({
  maxWidth: 800,
  padding: 16,
  margin: "auto",
  input: { margin: 8 },
  ".color-box": {
    height: 64,
    width: 64,
    margin: "16px 16px 0 0",
    borderRadius: 8,
    border: "1px solid " + N700,
  },
  "input.small": { width: 64 },
});

const ColorFinder = () => {
  const formik = useFormik({ initialValues });
  const { handleChange, values, setFieldValue } = formik;
  const { hexCode, r, g, b } = values;

  useEffect(() => {
    const newHexCode = decToHex([r, g, b]);
    setFieldValue("hexCode", newHexCode);
  }, [r, g, b, setFieldValue]);

  useEffect(() => {
    if (hexCode?.length < 6) {
      return;
    }
    const rgb = hexToDec(hexCode);
    setFieldValue("r", rgb[0]);
    setFieldValue("g", rgb[1]);
    setFieldValue("b", rgb[2]);
  }, [hexCode, setFieldValue]);

  const nearestColors = getNearestColors(hexCode);

  return (
    <div css={colorFinderStyle}>
      <h1>Color Finder</h1>
      <div className="flex justify-between items-start">
        <div className="flex">
          <div
            className="color-box"
            style={{ backgroundColor: "#" + hexCode }}
          ></div>
          <div>
            <div className="flex justify-between">
              <label>Hex Code</label>{" "}
              <input value={hexCode} name="hexCode" onChange={handleChange} />
            </div>
            <div className="flex justify-between">
              <label>RGB</label>
              <input
                className="small"
                value={+r}
                name="r"
                onChange={handleChange}
              />
              <input
                className="small"
                value={+g}
                name="g"
                onChange={handleChange}
              />
              <input
                className="small"
                value={+b}
                name="b"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <h2>Nearest Colors</h2>
          {nearestColors.map((color, colorIndex) => (
            <div key={colorIndex} className="flex justify-between">
              <div
                className="color-box"
                style={{ backgroundColor: color.hexCode }}
              ></div>
              {color.name} (distance: {color.distance.toFixed(1)})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorFinder;
