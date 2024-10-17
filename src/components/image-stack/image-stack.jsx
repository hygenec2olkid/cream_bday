import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageStack = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getRandomRotation = () => {
    return Math.floor(Math.random() * 26) - 15; 
  };

  const getIndex = (index) => {
    return index - 9999;
  };

  return (
    <div className="image-stack">
      <div className="stack">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className={`stacked-image image-${index} `}
            style={{
              transform: `rotate(${getRandomRotation()}deg)`,
            }}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="modal">
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <Swiper
            initialSlide={activeIndex}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: null, prevEl: null }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className="full-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ImageStack;
