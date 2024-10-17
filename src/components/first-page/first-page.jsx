import React from "react";
import ImageStack from "../image-stack/image-stack";
import "../image-stack/image-stack.css";

const images = [
  "src/assets/main-img/5E15DBA2-A9AB-4D22-94F6-37BD37269DB2.JPG",
  "src/assets/main-img/9E20F950-208C-4446-AF5E-5FC6858EFA6E.JPG",
  "src/assets/main-img/IMG_3428.JPG",
  "src/assets/main-img/IMG_4443.jpg",
  //   "src/assets/main-img/IMG_4717.jpg",
  //   "src/assets/main-img/IMG_5472.jpg",
  //   "src/assets/main-img/IMG_5735.jpg",
  //   "src/assets/main-img/IMG_5775.jpg",
  //   "src/assets/main-img/IMG_5933.jpg",
  //   "src/assets/main-img/IMG_5936.jpg",
  //   "src/assets/main-img/IMG_6164.jpg",
  //   "src/assets/main-img/IMG_6253.jpg",
  //   "src/assets/main-img/IMG_6425.jpg",
  //   "src/assets/main-img/IMG_6489.jpg",
  //   "src/assets/main-img/IMG_6694.jpg",
  //   "src/assets/main-img/IMG_6698.jpg",
  //   "src/assets/main-img/IMG_6702.jpg",
  //   "src/assets/main-img/IMG_6709.jpg",
  //   "src/assets/main-img/IMG_6711.jpg",
].reverse();

function FirstPage() {
  return (
    <>
      <div className="text-6xl leading-tight">
        สุขสันต์
        <br />
        วันเกิด
        <br /> Ice-cream
      </div>
      <ImageStack images={images}></ImageStack>
    </>
  );
}

export default FirstPage;
