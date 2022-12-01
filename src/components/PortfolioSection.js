import React from "react";
import "../style/portfolio.css";

function PortfolioSection() {
  return (
    <div>
      <div className="categories">
        <div className="category portraits active-page">Portraits</div>
        <div className="category landscapes">Landscapes</div>
        <div className="category festivals">Festivals</div>
        <div className="category drone">Drone photos</div>
      </div>

      <div className="images">
       {/* images will come here */}
      </div>
    </div>
  );
}

export default PortfolioSection;
