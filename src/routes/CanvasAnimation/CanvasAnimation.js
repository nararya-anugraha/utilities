import React, { useCallback, useEffect, useState } from "react";
import Canvas from "@components/Canvas";

const width = 400;
const height = 400;
const framePerSecond = 60;

const CanvasAnimation = () => {
  const [context, setContext] = useState(null);
  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    if (context) {
      context.lineWidth = 15;
      context.fillStyle = "white";
      context.strokeStyle = "black";
    }
  }, [context]);

  const render = useCallback(() => {
    const timeStamp = new Date().getTime() / 1000;
    const endAngle =
      (Math.PI * 2 * (timeStamp % framePerSecond)) / framePerSecond;

    context.fillRect(0, 0, width, height);
    context.beginPath();
    context.arc(width / 2, height / 2, 100, 0, endAngle);
    context.stroke();
  }, [context]);

  const startAnimation = () => {
    const step = () => {
      render();
      setAnimationFrame(window.requestAnimationFrame(step));
    };
    step();
  };

  const stopAnimation = () => window.cancelAnimationFrame(animationFrame);

  return (
    <div className="p16">
      <h1>Canvas Animation</h1>
      <Canvas
        {...{ height, width, setContext }}
        style={{ border: "1px solid black" }}
      />
      <br />
      <div>
        <button onClick={startAnimation}>Start</button>
        <button onClick={stopAnimation}>Stop</button>
      </div>
    </div>
  );
};

export default CanvasAnimation;
