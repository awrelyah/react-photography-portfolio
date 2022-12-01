import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/header.css";
import img1 from "../img/img1.jpg";
import img3 from "../img/img3.JPG";
import img10 from "../img/img10.JPG";
import img7 from "../img/img7.JPG";
import img9 from "../img/img9.JPG";

function Header() {
  return (
    <div>
      <div className="nav">
        <div className="portfolio-nav">portfolio</div>
        <div className="suchowola-nav"> suchowola media</div>
        <div className="contact-nav">contact</div>
      </div>

      <Carousel>
        <Carousel.Item>
          <img src={img1} alt="img" className="carousel-img" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img10} alt="img" className="carousel-img" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img3} alt="img" className="carousel-img" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img7} alt="img" className="carousel-img" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={img9} alt="img" className="carousel-img" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
