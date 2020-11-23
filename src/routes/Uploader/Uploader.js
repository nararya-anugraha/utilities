import { css } from "@emotion/core";
import React, { useRef, useState } from "react";
import { getImageSrc } from "./util";

const uploaderStyle = css({
  input: {
    visibility: "hidden",
    position: "absolute",
  },
  img: {
    maxWidth: 360,
    maxHeight: 360,
  },
});

const Uploader = () => {
  const fileInputRef = useRef();
  const [imgSrc, setImgSrc] = useState("");

  const onChangePhoto = ({ currentTarget }) => {
    const { files } = currentTarget;
    if (!files.length) {
      return;
    }
    const [file] = files;
    getImageSrc(file).then(setImgSrc);
  };

  const selectPhoto = () => {
    if (fileInputRef?.current?.click) {
      fileInputRef.current.click();
    }
  };

  return (
    <div css={uploaderStyle}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={onChangePhoto}
      />
      <button onClick={selectPhoto}>Select Photo</button>
      <br />
      {!!imgSrc && <img src={imgSrc} />}
    </div>
  );
};

export default Uploader;
