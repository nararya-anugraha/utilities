import { func } from "prop-types";
import React, { useEffect, useRef } from "react";

const Canvas = ({ setContext = () => {}, ...props }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const newContext = canvas.getContext("2d");
    setContext(newContext);
  }, [setContext]);

  return <canvas ref={canvasRef} {...props} />;
};

Canvas.propTypes = {
  setContext: func,
};

export default Canvas;
