import React, { useState, useEffect } from "react";

// Main App component to demonstrate the CustomTypeAnimation
function TypeAnimation() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {/* This part is static */}I am a {/* This part will be animated */}
          <CustomTypeAnimation
            sequence={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "ReactJs Developer",
              "NodeJS Developer",
            ]}
            typingSpeed={100} // Speed of typing each character (ms)
            deletingSpeed={50} // Speed of deleting each character (ms)
            pauseBeforeDelete={1800} // Pause after typing before deleting (ms) - slightly longer for clarity
            pauseBeforeType={800} // Pause after deleting before typing next (ms) - slightly longer for clarity
          />
        </h1>
      </div>
    </div>
  );
}

// CustomTypeAnimation component
const CustomTypeAnimation = ({
  sequence,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBeforeDelete = 1000,
  pauseBeforeType = 500,
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Handle the typing and deleting animation logic
    let timeout;
    const currentPhrase = sequence[currentPhraseIndex];

    if (!isDeleting) {
      // Typing logic: Add characters one by one
      if (displayedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            currentPhrase.substring(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        // Phrase fully typed, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    } else {
      // Deleting logic: Remove characters one by one from right to left
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(
            currentPhrase.substring(0, displayedText.length - 1)
          );
        }, deletingSpeed);
      } else {
        // Phrase fully deleted, move to next phrase, wait then start typing
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % sequence.length);
        timeout = setTimeout(() => {
          // No action needed here, the next cycle will start typing
          // This timeout ensures a pause before the next phrase starts typing
        }, pauseBeforeType);
      }
    }

    // Cleanup function to clear the timeout when component unmounts or dependencies change
    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    currentPhraseIndex,
    sequence,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeType,
  ]);

  useEffect(() => {
    // Blinking cursor effect
    const cursorTimeout = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(cursorTimeout);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <span className="text-yellow-400">
      {displayedText}
      {/* Blinking cursor */}
      <span
        className={`inline-block w-1 h-full bg-yellow-400 align-middle transition-opacity duration-200 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      ></span>
    </span>
  );
};

export default TypeAnimation;
