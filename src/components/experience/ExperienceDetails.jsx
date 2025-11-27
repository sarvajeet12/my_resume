import { experiencesData } from "../../constant/constants";
import Btn from "../common/Btn";
import React, { useState, useRef } from "react";

// Reusable ExperienceCard component
const ExperienceDetails = () => {
  const ExperienceBox = ({ experience }) => {
    // State to keep track of which edge is currently active for glowing border
    const [activeEdge, setActiveEdge] = useState("none");
    // State for the X-axis rotation (controls up/down tilt)
    const [tiltX, setTiltX] = useState(0);
    // State for the Y-axis rotation (controls left/right tilt)
    const [tiltY, setTiltY] = useState(0);

    // useRef to get a direct reference to the card DOM element
    const cardRef = useRef(null);

    /**
     * Handles the mouse movement over the card.
     * Calculates the mouse's position relative to the card, determines
     * the closest edge for border glow, and calculates tilt angles.
     * @param {MouseEvent} e - The mouse event object.
     */
    const handleMouseMove = (e) => {
      // Ensure the card reference exists
      if (!cardRef.current) return;

      // Get the size and position of the card relative to the viewport
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse coordinates relative to the card's top-left corner
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // --- Border Glow Logic ---
      // Calculate the distance from the mouse to each of the four edges
      const distToTop = y;
      const distToBottom = rect.height - y;
      const distToLeft = x;
      const distToRight = rect.width - x;

      // Find the minimum distance to determine the closest edge
      const minDistance = Math.min(
        distToTop,
        distToBottom,
        distToLeft,
        distToRight
      );

      // Set the active edge for border glow based on the minimum distance
      if (minDistance === distToTop) {
        setActiveEdge("top");
      } else if (minDistance === distToBottom) {
        setActiveEdge("bottom");
      } else if (minDistance === distToLeft) {
        setActiveEdge("left");
      } else if (minDistance === distToRight) {
        setActiveEdge("right");
      }

      // --- Tilt Effect Logic ---
      // Calculate normalized coordinates from -1 to 1 relative to the card's center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const normalizedX = (x - centerX) / centerX; // -1 (left) to 1 (right)
      const normalizedY = (y - centerY) / centerY; // -1 (top) to 1 (bottom)

      // Define the maximum tilt angle in degrees
      const maxTilt = 5;

      // Calculate tilt angles:
      // Moving mouse right (positive normalizedX) should tilt card left (negative rotateY)
      // Moving mouse down (positive normalizedY) should tilt card up (positive rotateX)
      setTiltY(normalizedX * -maxTilt);
      setTiltX(normalizedY * maxTilt);
    };

    /**
     * Handles the mouse leaving the card area.
     * Resets all dynamic effects: border glow and tilt.
     */
    const handleMouseLeave = () => {
      setActiveEdge("none"); // Turn off border glow
      setTiltX(0); // Reset X-axis tilt
      setTiltY(0); // Reset Y-axis tilt
    };

    /**
     * Generates the dynamic style object for the card, combining border and transform (tilt) properties.
     * @returns {Object} - An object containing CSS properties for the card.
     */
    const getCardDynamicStyle = () => {
      // Use the 'glowColor' prop for the border glow
      const defaultBorderColor = "rgb(55, 65, 81)"; // Tailwind's gray-700 equivalent

      // Initialize all borders with the default color
      let borderTop = `1px solid ${defaultBorderColor}`;
      let borderBottom = `1px solid ${defaultBorderColor}`;
      let borderLeft = `1px solid ${defaultBorderColor}`;
      let borderRight = `1px solid ${defaultBorderColor}`;

      // Apply the border glow color to the active edge
      switch (activeEdge) {
        case "top":
          borderTop = `1px solid ${experience.glowColor}`;
          break;
        case "bottom":
          borderBottom = `1px solid ${experience.glowColor}`;
          break;
        case "left":
          borderLeft = `1px solid ${experience.glowColor}`;
          break;
        case "right":
          borderRight = `1px solid ${experience.glowColor}`;
          break;
        default:
          // All borders remain default when no specific edge is active
          break;
      }

      return {
        borderTop: borderTop,
        borderBottom: borderBottom,
        borderLeft: borderLeft,
        borderRight: borderRight,
        // Apply 3D perspective and rotation for the tilt effect
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        // Add smooth transitions for all dynamic properties
        transition: "border-color 0.1s ease-out, transform 0.1s ease-out",
      };
    };

    return (
      <div
        ref={cardRef} // Attach the ref to this div
        onMouseMove={handleMouseMove} // Listen for mouse movement
        onMouseLeave={handleMouseLeave} // Listen for mouse leaving the element
        className="relative bg-gray-800 text-white rounded-xl p-8 w-full flex flex-col gap-5"
        // Apply all dynamic styles using the getCardDynamicStyle function
        style={getCardDynamicStyle()}
      >
        <h1 className="text-3xl font-bold">{experience.cmpyName}</h1>

        <div className="flex flex-col md:flex-row justify-between gap-y-10">
          {/* This contain logo, role, duration, workTime, workMode, workType */}
          <div className="w-full md:w-[65%]">
            {/* Logo, role and duration */}
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <img
                src={experience.cmpyLogo}
                alt="company-logo"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-xl">{experience.role}</h2>
                <h4 className="text-base text-slate-400">
                  {experience.duration}
                </h4>
              </div>
            </div>

            {/* employmentType, workTime, workMode, location */}
            <div className="flex flex-wrap gap-5 mt-5">
              <button
                title="Employment Type"
                className="h-12 px-5 py-3 rounded-xl text-slate-200 font-bold text-sm bg-blue-800"
              >
                {experience.employmentType}
              </button>
              <button
                title="Work Time"
                className="h-12 px-5 py-3 rounded-xl text-slate-200 font-bold text-sm bg-green-800"
              >
                {experience.workTime}
              </button>
              <button
                title="Work Mode"
                className="h-12 px-5 py-3 rounded-xl text-slate-200 font-bold text-sm bg-purple-800"
              >
                {experience.workMode}
              </button>
              <button
                title="Work Location"
                className="h-12 px-5 py-3 rounded-xl text-slate-200 font-bold text-sm bg-red-800"
              >
                {experience.location}
              </button>
            </div>
          </div>

          {/* This contain tech stack */}
          <div className="w-full md:w-[30%]">
            <h2 className="font-bold text-xl">Tech Stack Used</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {experience?.techStack?.map((tech, index) => (
                <p
                  key={index}
                  className="bg-gray-600 py-1 px-3 rounded-full text-white text-sm font-"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-slate-300">{experience.description}</p>
        {experience.cmpyName === "TestUnity" ? (
          <Btn
            btnName={experience.status}
          />
        ) : (
          <Btn
            path={experience.certificateLink}
            btnName={experience.certificateBtn}
          />
        )}
      </div>
    );
  };

  return (
    <>
      {experiencesData.map((experience, index) => (
        <ExperienceBox experience={experience} key={index} />
      ))}
    </>
  );
};

export default ExperienceDetails;
