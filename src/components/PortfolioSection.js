import React from "react";
import "../style/portfolio.css";
import Imagelist from "./Imagelist";
import Images from "./Images";


function PortfolioSection() {
  return (
    <div>
      <div className="categories">
        <div className="category portraits active-page">Portraits</div>
        <div className="category landscapes">Landscapes</div>
        <div className="category festivals">Festivals</div>
        <div className="category drone">Drone</div>
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
