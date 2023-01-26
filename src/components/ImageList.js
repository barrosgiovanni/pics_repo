import React from "react";
import ImageShow from "./ImageShow";

function ImageList({ images }) {

  const renderedImages = images.map((image) => {
    return <ImageShow imageId={image.id} key={image.id} />;
  })

  return (
    <div className="image-list">
      {renderedImages}
    </div>
  )
}

export default ImageList;
