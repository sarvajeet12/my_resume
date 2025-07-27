import React from 'react';

export default function InfiniteScrollingText() {
  const sentences = [
    "Code-Driven Creator",
    "React & Node Mastery",
    "Fast, Curious Learner",
    "Clean & Scalable UI",
    "Builder. Thinker. Doer.",
  ];

  // Duplicate the sentences to create a seamless loop for the infinite scroll effect.
  // By having two sets, when the first set moves off-screen, the second set is in place,
  // and the animation can loop back to the start without a visible jump.
  const duplicatedSentences = [...sentences, ...sentences];

  return (
    <>
      {/*
        Custom CSS for the infinite scrolling animation.
        This is embedded directly in the component for a self-contained example.
        In a larger project, you might define this in your CSS file or Tailwind config.
      */}
      <style>
        {`
        /* Define the keyframes for the infinite scroll animation */
        @keyframes infinite-scroll {
          /* Start at 0% translation (no movement) */
          from {
            transform: translateX(0);
          }
          /*
            Move the content to the left by 50% of its total width.
            Since we duplicated the content (e.g., A B C D E A B C D E),
            moving by 50% means moving exactly the width of one full set (A B C D E).
            This creates a perfect loop as the second set (A B C D E) now occupies
            the space where the first set was.
          */
          to {
            transform: translateX(-50%);
          }
        }

        /* Apply the animation to the element with this class */
        .animate-infinite-scroll {
          /*
            infinite-scroll: The name of our keyframe animation.
            40s: The duration of one full animation cycle. Adjust this value to control speed.
            linear: The timing function, ensuring a constant speed throughout the animation.
            infinite: Makes the animation repeat indefinitely.
          */
          animation: infinite-scroll 40s linear infinite;
        }
        `}
      </style>

      {/* Main container for the entire page, centered and dark background */}
      <div className=" bg-gray-900 flex items-center justify-center p-4 sm:p-8 font-sans">
        {/*
          Outer container for the slider.
          w-full max-w-6xl: Ensures the slider takes full width up to a maximum for responsiveness.
          overflow-hidden: Hides any content that extends beyond this container's boundaries,
                           creating the visible window for the scrolling effect.
          py-8: Vertical padding.
        */}
        <div className="w-full max-w-6xl overflow-hidden py-8">
          {/*
            Inner container that holds all the sentences (including duplicates).
            flex: Enables flexbox for horizontal arrangement.
            w-max: Makes this container as wide as its entire content, preventing wrapping.
            animate-infinite-scroll: Applies our custom CSS animation for continuous movement.
            gap-x-16: Provides a large horizontal gap (64px) between each sentence item.
          */}
          <div className="flex w-max animate-infinite-scroll gap-x-16">
            {duplicatedSentences.map((sentence, index) => (
              <div
                key={index} // Unique key for each item in the list, important for React performance
                className="flex-shrink-0 text-white text-3xl sm:text-2xl font-bold
                           px-8 py-2
                           flex items-center justify-center text-center whitespace-nowrap"
              >
                {sentence}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
