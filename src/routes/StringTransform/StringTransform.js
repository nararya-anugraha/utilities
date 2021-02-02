import { useFormik } from "formik";
import React, { useState } from "react";

const initialValues = {
  input: "",
  transformer: `;   ,
([^ ]+) *: *([^,]+),   '$1': '$2',
([^ ]+) \\{   '$1': {
}   },
'([\\d.]+)px'   $1`,
};

const StringTransform = () => {
  const formik = useFormik({ initialValues });
  const [output, setOutput] = useState("");

  const { handleChange, values } = formik;
  const { input, transformer } = values;

  const transformRegex = transformer
    .split(/[\n\r]+/)
    .map((line) => line.split(/\t| {3,}/))
    .filter(([from, to]) => from && to)
    .map(([from, to]) => [new RegExp(from, "g"), to]);

  const transform = () => {
    const newOutput = transformRegex.reduce(
      (accumulatedvalue, [from, to]) => accumulatedvalue.replace(from, to),
      input
    );

    setOutput(newOutput);
  };

  return (
    <>
      <label>Input</label>
      <br />
      <textarea
        rows={5}
        value={input}
        name="input"
        onChange={handleChange}
      ></textarea>
      <br />
      <label>Transformer</label>
      <br />
      <textarea
        rows={5}
        value={transformer}
        name="transformer"
        onChange={handleChange}
      ></textarea>
      <br />
      <button onClick={transform}>Transform</button>
      <br />
      <label>Output</label>
      <br />
      <textarea rows={5} value={output} />
    </>
  );
};

export default StringTransform;
