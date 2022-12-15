import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import "../style/imagelist.css"
import fest1 from "../assets/img/fest1.JPG";
import fest2 from "../assets/img/fest2.JPG";
import fest3 from "../assets/img/fest3.JPG";
import fest4 from "../assets/img/fest4.JPG";

function Imagelist() {
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
    <>
    <ImageList variant="masonry" cols={2} gap={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.source}?w=248&fit=crop&auto=format`}
    
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>


    </>
  );
}

export default Imagelist;
