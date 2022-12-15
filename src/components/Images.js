import React from "react";
import "../style/images.css";

function Images(props) {
  const itemData = props.imgData;

  return (
    <div className="imgs-container">
      {itemData.map((item) => (
        <div className="img-container" key={item.id}>
          <img
            src={`${item.source}`}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
}

export default Images;
