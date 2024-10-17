import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageStack = ({ images, imagesSlice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [shuffledImages, setShuffledImages] = useState([]);

  const openModal = (index) => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const shuffleArray = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledImages(shuffleArray(images));
  }, [images]);

  const getRandomRotation = () => {
    return Math.floor(Math.random() * 26) - 15;
  };

  const getIndex = (index) => {
    return index - 9999;
  };

  return (
    <div className="image-stack">
      <div className="stack">
        {shuffledImages.map((image, index) => (
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
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: null, prevEl: null }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {imagesSlice.map((image, index) => (
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
