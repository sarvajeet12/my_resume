import React, { useState, useEffect } from "react";

// Placeholder for the Btn component.
// In a real application, you would import this from "../common/Btn".
const Btn = ({ btnName, path }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    onClick={() => window.open(path, "_blank")}
  >
    {btnName}
  </button>
);

// Define the phrases to be animated
const phrases = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "ReactJs Developer",
  "NodeJS Developer",
  "Fresher",
  "JavaScript Developer",
];

// Animation speed and pause durations (in milliseconds)
const TYPING_SPEED = 150; // Speed at which characters are typed
const DELETING_SPEED = 100; // Speed at which characters are deleted
const PAUSE_AFTER_TYPING = 1000; // Pause duration after a phrase is fully typed
const PAUSE_AFTER_DELETING = 500; // Pause duration after a phrase is fully deleted

const CustomTypeAnimator = () => {
  // State to hold the currently displayed part of the phrase being animated
  const [displayedText, setDisplayedText] = useState("");
  // State to track which phrase in the `phrases` array is currently active
  const [phraseIndex, setPhraseIndex] = useState(0);
  // State to track the current character index within the active phrase
  const [charIndex, setCharIndex] = useState(0);
  // State to determine if the animation is currently deleting text (true) or typing text (false)
  const [isDeleting, setIsDeleting] = useState(false);
  // State to control the visibility of the cursor
  const [cursorVisible, setCursorVisible] = useState(true);

  // useEffect hook to manage the animation logic
  useEffect(() => {
    let timer; // Variable to hold the setTimeout ID for cleanup

    // Get the current phrase based on the `phraseIndex`
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      // --- TYPING PHASE ---
      // If not in deleting mode, and there are still characters to type in the current phrase
      if (charIndex < currentPhrase.length) {
        // Schedule typing the next character after `TYPING_SPEED` milliseconds
        timer = setTimeout(() => {
          // Update `displayedText` by adding the next character from the `currentPhrase`
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          // Increment `charIndex` to move to the next character
          setCharIndex(charIndex + 1);
        }, TYPING_SPEED);
      } else {
        // If all characters of the current phrase have been typed
        // Pause for `PAUSE_AFTER_TYPING` milliseconds, then switch to deleting mode
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_TYPING);
      }
    } else {
      // --- DELETING PHASE ---
      // If in deleting mode, and there are still characters to delete
      if (charIndex > 0) {
        // Schedule deleting the last character after `DELETING_SPEED` milliseconds
        timer = setTimeout(() => {
          // Update `displayedText` by removing the last character
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          // Decrement `charIndex` to move to the previous character
          setCharIndex(charIndex - 1);
        }, DELETING_SPEED);
      } else {
        // If all characters of the current phrase have been deleted
        // Pause for `PAUSE_AFTER_DELETING` milliseconds, then switch back to typing mode for the next phrase
        timer = setTimeout(() => {
          setIsDeleting(false);
          // Move to the next phrase in the array, using modulo to loop back to the start
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          // Reset `charIndex` to 0 for the new phrase
          setCharIndex(0);
          // Clear `displayedText` to ensure the new phrase starts typing from an empty string
          setDisplayedText("");
        }, PAUSE_AFTER_DELETING);
      }
    }

    // Cleanup function: This will clear the timeout if the component unmounts or if the dependencies of useEffect change
    return () => clearTimeout(timer);
  }, [displayedText, charIndex, isDeleting, phraseIndex]); // Dependencies for the useEffect hook

  // useEffect for cursor blinking
  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Blinks every 500ms

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
      I am a{" "}
      <span className="text-yellow-400">
        {displayedText}
        <span
          className={`inline-block w-0.5 h-full bg-yellow-400 align-text-bottom ml-1 ${
            cursorVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
        ></span>
      </span>
    </div>
  );
};

const ProfileData = () => {
  const info = `I have 2 years of experience as a full stack developer, primarily
        working on personal and academic projects using the MERN stack. During
        this time, I’ve built full-stack web applications like an EdTech
        platform and a hospital management system, handling both frontend
        (React.js) and backend (Node.js, Express) along with MongoDB for the
        database. I’ve also used tools like JWT, Cloudinary, CORS, and
        implemented REST APIs.`;

  return (
    <div className="text-center md:text-left w-full md:w-1/2 flex flex-col gap-y-2">
      {/* Custom Type Animation Component */}
      <CustomTypeAnimator />

      <p className="text-base text-gray-200 mt-5 bg-slate-800 px-4 py-4 rounded-xl">
        {info}
      </p>
      <a href="" className="mt-10">
        <Btn
          btnName={"Resume"}
          path={
            "https://drive.google.com/file/d/11lo_QqmjKIcTkWny_a0mi6FmsLgE9fiF/view?usp=sharing"
          }
        />
      </a>
    </div>
  );
};

export default ProfileData;
