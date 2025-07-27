import React, { useState, useRef, useEffect } from "react";
import { certificates } from "../../constant/constants";

// CertificateCard Component: Renders an individual certificate
const CertificateCard = ({ certificate }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 border border-gray-700 h-full">
      {/* Certificate Image (Placeholder) */}
      <a
        href={certificate.imageUrl}
        className="w-full"
        title="View Certificate"
        target="_blank"
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
      </a>
      <h3 className="text-xl font-bold text-white mb-2 text-center">
        {certificate.title}
      </h3>
      <p className="text-gray-400 text-sm text-center mb-1">
        {certificate.issuer}
      </p>
      <p className="text-gray-500 text-xs text-center">{certificate.date}</p>
    </div>
  );
};

// CertificateSlider Component: Manages the slider logic and display
const CertificateSlider = () => {
  // State for the current starting index of visible certificates
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to determine how many items to show per page based on screen size
  const [itemsPerPage, setItemsPerPage] = useState(2); // Default to 2 for larger screens
  // Ref for the slider track to measure card width for smooth transitions
  const sliderTrackRef = useRef(null);

  // Effect to determine itemsPerPage based on window width
  useEffect(() => {
    const handleResize = () => {
      // If window width is less than 768px (Tailwind's 'md' breakpoint), show 1 item
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        // Otherwise, show 2 items
        setItemsPerPage(2);
      }
      // Reset currentIndex to 0 on resize to prevent out-of-bounds issues
      setCurrentIndex(0);
    };

    // Set initial itemsPerPage on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Calculate the maximum index the slider can go to
  // This ensures we don't try to display certificates beyond the array length
  const maxIndex = certificates.length - itemsPerPage;

  // Handler for the "Next" button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  // Handler for the "Previous" button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Determine if the "Previous" button should be disabled
  const isPrevDisabled = currentIndex === 0;
  // Determine if the "Next" button should be disabled
  const isNextDisabled = currentIndex >= maxIndex;

  // Calculate the transform value for smooth sliding
  // We need to know the width of a single card + its margin/gap
  // Assuming a fixed gap of 8 (gap-8 in Tailwind) for calculation
  const cardWidth = sliderTrackRef.current
    ? sliderTrackRef.current.children[0]?.offsetWidth
    : 0;
  const gapWidth = 32; // Corresponds to Tailwind's gap-8 (8 * 4px = 32px)
  const translateXValue = currentIndex * (cardWidth + gapWidth);

  return (
    <div className="w-full mx-auto p-4 md:p-8 rounded-xl">
      <div className="relative">
        {/* Slider Track Container - uses overflow-hidden to hide cards outside view */}
        <div className="overflow-hidden">
          {/* Slider Track - applies the transform for sliding */}
          <div
            ref={sliderTrackRef}
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${translateXValue}px)` }}
          >
            {certificates.map((cert) => (
              <div
                key={cert.id}
                // Flex-shrink-0 prevents cards from shrinking
                // w-full makes it take full width on small screens
                // md:w-1/2-gap makes it take roughly half width on medium screens and up, accounting for gap
                className="flex-shrink-0 w-full md:w-[calc(50%-16px)]" // Adjusted width to account for gap-8 (16px per side)
              >
                <CertificateCard certificate={cert} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={isPrevDisabled}
          className={`absolute top-1/2 left-0 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200
            ${
              isPrevDisabled
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75`}
        >
          {/* Left Arrow Icon (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`absolute top-1/2 right-0 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200
            ${
              isNextDisabled
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75`}
        >
          {/* Right Arrow Icon (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Main App component to render the slider
const CertificateList = () => {
  return <CertificateSlider />;
};

export default CertificateList;
