import React from "react";
import "../style/portfolio.css";
import Imagelist from "./Imagelist";
import Images from "./Images";

function PortfolioSection({ portfolioRef }) {
  return (
    <div>
      <div className="categories" ref={portfolioRef}>
        <div className="category portraits active-page">Portraits</div>
        <div className="category landscapes">Landscapes</div>
        <div className="category festivals">Festivals</div>
        <div className="category drone">Aerial</div>
      </div>

      <div className="images">
        {/* still deciding how exactly the image gallery should look*/}
        {/* prob not going to use Imagelist.js */}
        <Images />
      </div>
    </div>
  );
}

export default PortfolioSection;
