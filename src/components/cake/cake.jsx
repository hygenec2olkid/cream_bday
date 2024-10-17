import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./cake.css";

const Cake = () => {
  const [startShaking, setStartShaking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLastMsg, setShowLastMsg] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });

  const cakeRef = useRef(null);

  const cakeStages = [
    { label: "Unbaked Cake", image: "/static/images/cake/cake.png" },
  ];

  const handleImageClick = () => {
    setStartShaking(true);

    if (cakeRef.current) {
      const rect = cakeRef.current.getBoundingClientRect();
      setConfettiPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }

    setTimeout(() => {
      setShowConfetti(true);
      setShowLastMsg(true);
    }, 5000);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => {
        setShowConfetti(false);
        setStartShaking(false);
      }, 3000);
    }
  }, [showConfetti]);

  return (
    <div
      className="cake-container"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="text-3xl text-[#7F27FF] flex items-center mt-[1rem]">
        <div>ถึงเวลาเป่าเค้กแล้วววว</div>
        <motion.div
          className="text-5xl ml-1"
          animate={{ y: [0, -2, 2, 0], opacity: [1, 0.8, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          🌬️
        </motion.div>
      </div>

      <motion.div
        key={cakeStages[0].label}
        initial={{ opacity: 1, scale: 1, rotate: 0 }}
        animate={
          startShaking
            ? {
                scale: [0.5, 1],
                rotate: [0, 15, -15, 15, -15, 0],
              }
            : { scale: 1, rotate: 0 }
        }
        transition={{
          duration: 5,
          ease: "easeInOut",
          loop: startShaking ? Infinity : 0,
        }}
        className="cake-stage"
        onClick={handleImageClick}
        ref={cakeRef}
      >
        <img
          src={cakeStages[0].image}
          alt={cakeStages[0].label}
          className="cake-image"
        />
      </motion.div>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          x={confettiPosition.x}
          y={confettiPosition.y}
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={700}
          gravity={0.05}
          recycle={false}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}
      {showLastMsg && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" text-center text-xl text-[#7F27FF]"
        >
          Happy Birth Day! 🎂 <br />
          ของขวัญวันเกิดไว้เอาไปให้วันที่ 23 นะจ๊ะ
        </motion.div>
      )}
    </div>
  );
};

export default Cake;
