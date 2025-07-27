import React, { useState, useEffect, useRef } from "react"; // Import useRef
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

const Connect = () => {
  // Array of dynamic phrases for the subheading
  const availabilityPhrases = [
    "Ready to collaborate!",
    "Open for freelance projects!",
    "Seeking new opportunities!",
    "Available for full-time roles!",
    "Excited for internships!",
    "Let's build something amazing!",
    "Eager to learn new things."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  // State for the position of the internal glow light (relative to the box)
  const [internalGlowPos, setInternalGlowPos] = useState({ x: 0, y: 0 });
  // State to track if the mouse is hovering over the box (to show internal glow)
  const [isHovering, setIsHovering] = useState(false);

  // useRef to get a direct reference to the box DOM element
  const boxRef = useRef(null);

  useEffect(() => {
    // Cycle through phrases every 3 seconds
    const interval = setInterval(() => {
      setCurrentPhraseIndex(
        (prevIndex) => (prevIndex + 1) % availabilityPhrases.length
      );
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [availabilityPhrases.length]); // Re-run if phrases array changes (unlikely here)

  /**
   * Handles the mouse movement over the box.
   * Calculates the mouse's position relative to the box and updates internal glow position.
   * @param {MouseEvent} e - The mouse event object.
   */
  const handleMouseMove = (e) => {
    // Ensure the box reference exists
    if (!boxRef.current) return;

    // Set hovering state to true as mouse is over the box
    setIsHovering(true);

    // Get the size and position of the box relative to the viewport
    const rect = boxRef.current.getBoundingClientRect();

    // Calculate mouse coordinates relative to the box's top-left corner
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update the position of the internal glow light
    setInternalGlowPos({ x, y });
  };

  /**
   * Handles the mouse leaving the box area.
   * Resets internal glow state.
   */
  const handleMouseLeave = () => {
    setIsHovering(false); // Turn off internal glow
  };

  return (
    // Main container for the contact section, centered with a dark gradient background
    <>
      <div
        ref={boxRef} // Attach the ref to this div
        onMouseMove={handleMouseMove} // Listen for mouse movement
        onMouseLeave={handleMouseLeave} // Listen for mouse leaving the element
        className="relative bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 w-full text-center border border-gray-700
                  transform transition-all duration-500 hover:shadow-3xl
                  overflow-hidden" // Added overflow-hidden for internal glow containment
      >
        {/* Subtle inner glow effect (pseudo-element or div) */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(100, 100, 255, 0.05) 0%, transparent 70%)",
            filter: "blur(30px)",
            zIndex: -1,
          }}
        ></div>

        {/* Internal glow element - only visible when hovering */}
        {isHovering && (
          <div
            className="absolute rounded-full pointer-events-none" // pointer-events-none ensures mouse events pass through
            style={{
              left: internalGlowPos.x,
              top: internalGlowPos.y,
              transform: "translate(-50%, -50%)", // Center the glow div on the cursor
              width: "200px", // Size of the glow
              height: "200px", // Size of the glow
              background: `radial-gradient(circle at center, rgba(0, 191, 255, 0.15) 0%, rgba(0, 191, 255, 0) 70%)`, // Soft radial gradient (blue)
              filter: "blur(25px)", // Blur the glow for a softer effect
              transition: "transform 0.05s ease-out", // Smooth movement of the glow
              zIndex: 0, // Ensure it's behind content but above the static inner glow
            }}
          ></div>
        )}

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in z-10">
          Let's Connect!
        </h1>

        {/* Dynamic Subheading */}
        <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-10 h-10 flex items-center justify-center z-10">
          <span key={currentPhraseIndex} className="animate-fade-in-out">
            {availabilityPhrases[currentPhraseIndex]}
          </span>
        </p>

        {/* Contact Information */}
        <div className="space-y-6 mb-10 z-10">
          <div className="flex items-center justify-center">
            {/* Email Address */}
            <span className="text-slate-800 text-lg md:text-xl flex gap-4 items-center bg-gray-300 px-4 py-2 rounded-full border-4 border-transparent hover:border-yellow-500 hover:border-4">
              <MdEmail />
              <span>sarvajeetshahktn@gmail.com</span>
            </span>
          </div>

          <div className="flex items-center justify-center">
            {/* Phone Number */}
            <span className="text-slate-800 text-lg md:text-xl  flex gap-4 items-center bg-gray-300 px-4 py-2 rounded-full hover:border-blue-500 hover:border-4 border-4 border-transparent">
              <IoCall />
              <span>+91 - 6201749157</span>
            </span>
          </div>
          <div className="gap-10 flex justify-center">
            <a
              href="https://www.linkedin.com/in/sarvajeet-lal-shah-928280274"
              title="LinkedIn"
              target="_blank"
            >
              <IoLogoLinkedin className="text-blue-500 cursor-pointer text-4xl hover:text-slate-400" />
            </a>
            <a
              href="https://github.com/sarvajeet12"
              title="GitHub"
              target="_blank"
            >
              <FaSquareGithub className="text-blue-500 cursor-pointer text-4xl hover:text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s forwards;
          opacity: 0; /* Start hidden */
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out 0.6s forwards;
          opacity: 0; /* Start hidden */
        }
        .animate-fade-in-out {
          animation: fadeInOut 3s ease-in-out infinite; /* Matches interval duration */
        }
        `}
      </style>
    </>
  );
};

export default Connect;
