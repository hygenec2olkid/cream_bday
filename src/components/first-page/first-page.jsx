import React from "react";
import ImageStack from "../image-stack/image-stack";
import "../image-stack/image-stack.css";
import { motion } from "framer-motion";

const images = [
  "/static/images/main-img/5E15DBA2-A9AB-4D22-94F6-37BD37269DB2.JPG",
  "/static/images/main-img/9E20F950-208C-4446-AF5E-5FC6858EFA6E.JPG",
  "/static/images/main-img/IMG_3428.JPG",
  "/static/images/main-img/IMG_4443.jpg",
];

function FirstPage() {
  return (
    <>
      <motion.div
        className="absolute text-6xl right-14 top-14"
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
        className="absolute text-3xl left-24 top-10"
        animate={{ y: [0, -2, 2, 0], opacity: [1, 0.8, 1] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        🥳
      </motion.div>

      <img
        className="absolute bottom-[45%] left-5 rotate-[-12deg]"
        height={100}
        width={100}
        src={"/static/images/baby-cream/IMG_6780.jpg"}
      ></img>

      <img
        className="absolute bottom-[43%] right-5 rotate-[3deg]"
        height={100}
        width={100}
        src={
          "/static/images/baby-cream/C35B6A3D-F7D2-4A23-8E79-C752B8602113.jpg"
        }
      ></img>
      <div className="text-7xl leading-snug text-[#7F27FF] pt-[25%] pb-[30%] pl-[5%]">
        สุขสันต์
        <br />
        วันเกิด
        <br />
        <span className="text-6xl"> Ice-cream🎉</span>
      </div>
      <ImageStack images={images}></ImageStack>
    </>
  );
}

export default FirstPage;
