import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import "../style/imagelist.css"

function Imagelist(props) {
  const itemData = props.imgData;

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
