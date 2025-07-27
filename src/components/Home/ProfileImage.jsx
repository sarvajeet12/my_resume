import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "../../assets/Sarvajeet_Portfolio.jpg";

// Main App component that contains the TiltCard logic
const ProfileImage = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <TiltCard imageUrl={Image} />
    </div>
  );
};

// TiltCard Component
const TiltCard = ({ imageUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  // Handles mouse movement over the card to calculate tilt
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Normalize mouse coordinates to a range of -1 to 1 relative to card center
    const normalizedX = mouseX / (width / 2);
    const normalizedY = mouseY / (height / 2);

    // Calculate tilt angles. Adjust the multiplier (e.g., 10) for more/less intense tilt.
    // mouseX affects rotation around Y-axis (tilt left/right)
    // mouseY affects rotation around X-axis (tilt up/down)
    const tiltX = -normalizedY * 10; // Invert Y for natural up/down tilt
    const tiltY = normalizedX * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "none", // Disable transition during mouse move for immediate response
    });
  };

  // Handles mouse entering the card area
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handles mouse leaving the card area
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset tilt and re-enable smooth transition for the return animation
    setTiltStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.3s ease-out", // Smooth transition for returning to original state
    });
  };

  return (
    <div
      className="relative w-80 rounded-full overflow-hidden flex flex-col items-center justify-start p-3 cursor-pointer
             transform transition-transform duration-300 ease-out will-change-transform
             bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
             shadow-[0_10px_40px_rgba(72,61,139,0.6)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={isHovered ? handleMouseMove : undefined} // Only track mouse move when hovered
      ref={cardRef}
      style={tiltStyle} // Apply dynamic tilt styles
    >
      <img
        src={imageUrl}
        alt="Profile Image"
        className="w-full h-full object-cover rounded-full shadow-md"
      />
    </div>
  );
};

export default ProfileImage; // Export the main App component
