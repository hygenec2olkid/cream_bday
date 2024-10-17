import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./cake.css"; // Ensure your styles are applied correctly

const Cake = () => {
  const [startShaking, setStartShaking] = useState(false); // Control shaking state
  const [showConfetti, setShowConfetti] = useState(false); // Control confetti display
  const [showLastMsg, setShowLastMsg] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });

  const cakeRef = useRef(null); // Reference for the cake image

  const cakeStages = [
    { label: "Unbaked Cake", image: "/static/images/cake/cake.png" },
  ];

  const handleImageClick = () => {
    setStartShaking(true); // Start shaking and scaling when image is clicked

    // Get the position of the cake image
    if (cakeRef.current) {
      const rect = cakeRef.current.getBoundingClientRect();
      setConfettiPosition({
        x: rect.left + rect.width / 2, // Center x position
        y: rect.top + rect.height / 2, // Center y position
      });
    }

    // Trigger confetti after the shaking animation ends (e.g., 5 seconds)
    setTimeout(() => {
      setShowConfetti(true);
      setShowLastMsg(true); // Show confetti after shake ends
    }, 5000); // 5-second delay to match the animation duration
  };

  // Handle resizing window to adjust confetti size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Stop confetti after 3 seconds
  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => {
        setShowConfetti(false); // Stop confetti after 3 seconds
        setStartShaking(false); // Stop shaking as well
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
          className="text-5xl ml-1" // Use margin-left for spacing
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
        initial={{ opacity: 1, scale: 1, rotate: 0 }} // Start normal-sized when not clicked
        animate={
          startShaking
            ? {
                scale: [0.5, 1], // Start smaller, grow to full size
                rotate: [0, 15, -15, 15, -15, 0], // Rotate back and forth for shaking
              }
            : { scale: 1, rotate: 0 }
        } // Stay normal size and no rotation if not clicked
        transition={{
          duration: 5, // Duration for grow and shake
          ease: "easeInOut", // Optional easing function
          loop: startShaking ? Infinity : 0, // Only loop if shaking is started
        }}
        className="cake-stage"
        onClick={handleImageClick} // Click handler to start animation
        ref={cakeRef} // Set the ref here
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
          x={confettiPosition.x} // Position the confetti
          y={confettiPosition.y}
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={700} // Customize number of confetti pieces
          gravity={0.05} // Adjust how quickly confetti falls
          recycle={false} // Stop confetti after one burst
          style={{
            position: "absolute", // Use absolute positioning
            left: 0, // Set left to 0 for absolute positioning
            top: 0, // Set top to 0 for absolute positioning
            zIndex: 9999, // Ensure it’s on top
            pointerEvents: "none", // Ensure it doesn't block interactions
          }}
        />
      )}
      {showLastMsg && (
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start hidden and below
          animate={{ opacity: 1, y: 0 }} // Fade in and slide up
          transition={{ duration: 1, ease: "easeOut" }} // Transition duration and easing
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
