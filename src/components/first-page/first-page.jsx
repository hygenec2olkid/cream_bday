import React from "react";
import ImageStack from "../image-stack/image-stack";
import "../image-stack/image-stack.css";

const images = [
  "/static/images/main-img/5E15DBA2-A9AB-4D22-94F6-37BD37269DB2.JPG",
  "/static/images/main-img/9E20F950-208C-4446-AF5E-5FC6858EFA6E.JPG",
  "/static/images/main-img/IMG_3428.JPG",
  "/static/images/main-img/IMG_4443.jpg",
];

function FirstPage() {
  return (
    <>
      <div className="text-6xl leading-tight text-[#7F27FF]">
        สุขสันต์
        <br />
        วันเกิด
        <br /> Ice-cream😉
      </div>
      <ImageStack images={images}></ImageStack>
    </>
  );
}

export default FirstPage;
