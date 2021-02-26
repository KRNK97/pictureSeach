import React from "react";
import "./ImageList.css";
import Image from "./Image";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return <Image image={img} key={img.id} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
