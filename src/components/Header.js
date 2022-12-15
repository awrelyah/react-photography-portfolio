import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/header.css";
import img1 from "../assets/img/img1.jpg";
import img3 from "../assets/img/img3.JPG";
import img10 from "../assets/img/img10.JPG";
import img7 from "../assets/img/img7.JPG";
import img9 from "../assets/img/img9.JPG";

function Header({ mainRef, portfolioRef, contactRef }) {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={mainRef}>
      <div className="nav">
        <div
          className="portfolio-nav"
          onClick={() => handleScroll(portfolioRef.current)}
        >
          portfolio
        </div>
        <div
          className="suchowola-nav"
          onClick={() => handleScroll(mainRef.current)}
        >
          {" "}
          suchowola media
        </div>
        <div
          className="contact-nav"
          onClick={() => handleScroll(contactRef.current)}
        >
          contact
        </div>
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
