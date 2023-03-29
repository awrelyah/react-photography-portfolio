import React, { useState } from "react";
import "../style/portfolio.css";
import Imagelist from "./Imagelist";
import Images from "./Images";
import { portraits } from "../assets/portraitPhotos";
import { landscapes } from "../assets/landscapePhotos";
import { festivals } from "../assets/festivalPhotos";

function PortfolioSection({ portfolioRef }) {
  const [activeSection, setActiveSection] = useState("portraits");
  const [imgData, setImgData] = useState(portraits);

  const handleSections = (value) => {
    setActiveSection(value);
    if (value == "portraits") setImgData(portraits);
    if (value == "landscapes") setImgData(landscapes);
    if (value == "festivals") setImgData(festivals);
  };

  return (
    <div className="portfolio">
      <div className="categories" ref={portfolioRef}>
        <button
          className={
            activeSection == "portraits"
              ? "category portraits active-page"
              : "category portraits"
          }
          onClick={() => handleSections("portraits")}
        >
          Portraits
        </button>
        <button
          className={
            activeSection == "landscapes"
              ? "category landscapes active-page"
              : "category landscapes"
          }
          onClick={() => handleSections("landscapes")}
        >
          Landscapes
        </button>
        <button
          className={
            activeSection == "festivals"
              ? "category festivals active-page"
              : "category festivals"
          }
          onClick={() => handleSections("festivals")}
        >
          Festivals
        </button>
        <button
          className={
            activeSection == "drone"
              ? "category drone active-page"
              : "category drone"
          }
          onClick={() => handleSections("drone")}
        >
          Aerial
        </button>
      </div>

      <div className="images">
        {/* still deciding how exactly the image gallery should look*/}
        {/* prob not going to use Imagelist.js 
         <Imagelist imgData={imgData}/>*/}
        <Images imgData={imgData} />
      </div>
    </div>
  );
}

export default PortfolioSection;
