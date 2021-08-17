import React, { useState } from "react";
import Canvas from "../../components/Canvas";
import { initialScript } from "./data";

const CanvasDemo = () => {
  const [error, setError] = useState("");
  const [script, setScript] = useState(initialScript);
  const [context, setContext] = useState(null);

  const clearCanvas = () => {
    context.fillStyle = "white";
    context.fillRect(0, 0, 400, 400);
  };

  const renderScript = () => {
    setError("");
    try {
      const evaluatedFunction = window.eval(`(context) => {${script}}`);
      clearCanvas();
      evaluatedFunction(context);
    } catch (newError) {
      setError(newError.message);
    }
  };

  return (
    <div>
      <h1>Canvas</h1>
      <div className="flex items-start">
        <div>
          <textarea
            cols={30}
            rows={10}
            value={script}
            onChange={(event) => setScript(event.target.value)}
          />
          <br />
          <div>
            <button onClick={clearCanvas}>Clear</button>
            <button onClick={renderScript}>Render</button>
          </div>
          {!!error && <p>{error}</p>}
        </div>
        <Canvas
          setContext={setContext}
          style={{ border: "1px solid black" }}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default CanvasDemo;
