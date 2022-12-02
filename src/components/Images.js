import React from "react";
import "../style/images.css";
import fest1 from "../img/fest1.JPG";
import fest2 from "../img/fest2.JPG";
import fest3 from "../img/fest3.JPG";
import fest4 from "../img/fest4.JPG";

function Images() {
  const itemData = [
    {
      id: 1,
      source: fest1,
      title: "fest1",
    },
    {
      id: 2,
      source: fest2,
      title: "fest2",
    },
    {
      id: 3,
      source: fest3,
      title: "fest3",
    },
    {
      id: 4,
      source: fest4,
      title: "fest4",
    },
  ];
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
