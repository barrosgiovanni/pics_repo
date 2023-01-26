import React from "react";

function ImageShow({ imageId }) {

  const url = `https://unsplash.com/photos/${imageId}/download?ixid=Mnw0MDI5MDJ8MHwxfHNlYXJjaHwxfHx3ZWVkfGVufDB8fHx8MTY3NDc1MzE3OQ`;

  return (
    <img src={url} alt='display pics searched' className="image"/>
  )
}

export default ImageShow;
