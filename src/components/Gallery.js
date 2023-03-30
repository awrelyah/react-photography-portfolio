import React, { useState } from "react";
import "../style/gallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

function Gallery(props) {
  const data = props.imgData;

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleNextSlide = () => {
    slideNumber + 1 === data.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handlePrevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(data.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  return (
    <>
      {openModal && (
        <div
          className="slider-wrapper"
          onKeyDown={(key) => {
            console.log(key);
          }}
        >
          {/* x circle not working???*/}
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className="btn-close"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btn-prev"
            onClick={handleNextSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btn-next"
            onClick={handlePrevSlide}
          />
          <div className="fullscreenimg">
            <img src={data[slideNumber].source} alt="" />
          </div>
        </div>
      )}
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="single"
              key={item.id}
              onClick={() => handleOpenModal(index)}
            >
              <img className="center-cropped" src={`${item.source}`} alt={item.title} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
