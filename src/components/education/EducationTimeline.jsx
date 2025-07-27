import React from "react";
import { educationData } from "../../constant/constants";

// Main App component that renders the EducationSection
export default function EducationTimeline() {
  return (
    <>
      <EducationSection />
    </>
  );
}

// EducationSection Component
const EducationSection = () => {
  return (
    <>
      {/* Custom CSS for fade-in animation and timeline specific styles */}
      <style>
        {`
        /* Fade-in animation for each card */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn-delay-0 { animation: fadeIn 0.8s ease-out forwards; animation-delay: 0s; }
        .animate-fadeIn-delay-1 { animation: fadeIn 0.8s ease-out forwards; animation-delay: 0.3s; }
        .animate-fadeIn-delay-2 { animation: fadeIn 0.8s ease-out forwards; animation-delay: 0.6s; }
        .animate-fadeIn-delay-3 { animation: fadeIn 0.8s ease-out forwards; animation-delay: 0.9s; }
        .animate-fadeIn-delay-4 { animation: fadeIn 0.8s ease-out forwards; animation-delay: 1.2s; }

        /* Base styling for the card container within the timeline */
        .timeline-item-card {
          position: relative;
          /* On desktop: half width minus gap from central line */
          width: calc(50% - 2rem);
        }

        /* Connecting line from card to the central timeline dot */
        .timeline-item-card::before {
          content: '';
          position: absolute;
          top: 50%; /* Vertically center the line */
          width: 2rem; /* Length of the connecting line */
          height: 2px;
          background-color: #3B82F6; /* Blue-500 */
          transform: translateY(-50%);
          z-index: 1; /* Ensures line is behind the dot but above the card */
        }

        /* Styles for cards aligned to the left of the central line */
        .timeline-item-left .timeline-item-card {
          margin-right: 2rem; /* Creates the gap between card and central line */
        }
        .timeline-item-left .timeline-item-card::before {
          right: -2rem; /* Positions the connecting line to the right of the card */
        }

        /* Styles for cards aligned to the right of the central line */
        .timeline-item-right .timeline-item-card {
          margin-left: 2rem; /* Creates the gap between card and central line */
        }
        .timeline-item-right .timeline-item-card::before {
          left: -2rem; /* Positions the connecting line to the left of the card */
        }

        /* Responsive adjustments for mobile screens (below 'md' breakpoint) */
        @media (max-width: 767px) {
          .timeline-item-card {
            width: calc(100% - 3rem); /* Full width minus space for line and dot */
            margin-left: 3rem; /* Pushes the card to the right of the central line */
            margin-right: 0; /* Reset margin for right-aligned cards on mobile */
          }
          .timeline-item-card::before {
            content: none; /* Hide the connecting line on small screens */
          }
          /* Ensure all cards align to the right of the line on mobile */
          .timeline-item-left, .timeline-item-right {
            justify-content: flex-start; /* Aligns all content to the start (left) */
          }
        }
        `}
      </style>

      {/* Timeline Container */}
      <div className="relative pt-8 pb-4">
        {/* Central vertical line */}
        <div className="absolute inset-y-0 left-1/2 w-1 bg-blue-500 transform -translate-x-1/2"></div>

        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-12 opacity-0 ${`animate-fadeIn-delay-${index}`}
                ${
                  index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"
                }
              `}
            style={{ animationFillMode: "forwards" }} // Keep the element visible after animation
          >
            {/* Dot on the central line */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-800 z-20"></div>

            {/* Card content - conditionally positioned left/right */}
            <div
              className={`flex ${
                index % 2 === 0
                  ? "justify-end md:justify-start"
                  : "justify-start md:justify-end"
              }`}
            >
              <div className="timeline-item-card bg-gray-700 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-blue-500/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-200 mb-1">{edu.institution}</p>
                <p className="text-md text-gray-400 mb-2">{edu.field}</p>
                <div className="flex gap-5 my-2">
                  <p className="text-xs font-bold bg-gray-400 py-1 px-2 rounded-full">{edu.years}</p>
                  <p className="text-xs font-bold bg-gray-400 py-1 px-2 rounded-full">{edu.grade}</p>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
