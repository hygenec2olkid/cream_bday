import React from "react";
import ImageStack from "../image-stack/image-stack";
import "../image-stack/image-stack.css";
import { motion } from "framer-motion";

const images = [
  "/static/images/baby-cream/IMG_6781.jpg",
  "/static/images/baby-cream/C35B6A3D-F7D2-4A23-8E79-C752B8602113.jpg",
  "/static/images/baby-cream/IMG_6780.jpg",
  "/static/images/baby-cream/IMG_6779.jpg",
];

const imagesSlice = [
  "/static/images/main-img/IMG_3428.JPG",
  "/static/images/main-img/IMG_4443.jpg",
  "/static/images/main-img/IMG_4717.jpg",
  "/static/images/main-img/IMG_5472.jpg",
  "/static/images/main-img/9E20F950-208C-4446-AF5E-5FC6858EFA6E.JPG",
  "/static/images/main-img/IMG_5735.jpg",
  "/static/images/main-img/IMG_5775.jpg",
  "/static/images/main-img/IMG_5933.jpg",
  "/static/images/main-img/IMG_5936.jpg",
  "/static/images/main-img/IMG_6164.jpg",
  "/static/images/main-img/IMG_6253.jpg",
  "/static/images/main-img/IMG_6425.jpg",
  "/static/images/main-img/IMG_6489.jpg",
  "/static/images/main-img/IMG_6694.jpg",
  "/static/images/main-img/IMG_6698.jpg",
  "/static/images/main-img/IMG_6702.jpg",
  "/static/images/main-img/IMG_6709.jpg",
  "/static/images/main-img/IMG_6711.jpg",
];

function FirstPage() {
  return (
    <>
      <motion.div
        className="absolute text-5xl right-16 top-8"
        animate={{ y: [0, -2, 2, 0], opacity: [1, 0.8, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute text-2xl left-20 top-3"
        animate={{ y: [0, -2, 2, 0], opacity: [1, 0.8, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        🥳
      </motion.div>

      <div className="text-[3.25rem] leading-tight text-[#7F27FF] pt-[3rem] pb-[5rem]">
        สุขสันต์
        <br />
        วันเกิด
        <br />
        Ice-cream🎉
      </div>
      <ImageStack images={images} imagesSlice={imagesSlice}></ImageStack>
    </>
  );
}

export default FirstPage;
