import React, { useState, useRef } from "react";
import { projectsList } from "../../constant/constants";

// Main App component for the Project Box
const ProjectList = () => {
  // This is a reusable component for each project box
  // It now accepts a 'glowColor' prop to customize the glow
  const ProjectBox = ({ project }) => {
    const [activeEdge, setActiveEdge] = useState("none");
    const [internalGlowPos, setInternalGlowPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [tiltX, setTiltX] = useState(0);
    const [tiltY, setTiltY] = useState(0);
    const boxRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!boxRef.current) return;
      setIsHovering(true);
      const rect = boxRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const distToTop = y;
      const distToBottom = rect.height - y;
      const distToLeft = x;
      const distToRight = rect.width - x;
      const minDistance = Math.min(
        distToTop,
        distToBottom,
        distToLeft,
        distToRight
      );

      if (minDistance === distToTop) setActiveEdge("top");
      else if (minDistance === distToBottom) setActiveEdge("bottom");
      else if (minDistance === distToLeft) setActiveEdge("left");
      else if (minDistance === distToRight) setActiveEdge("right");

      setInternalGlowPos({ x, y });

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const normalizedX = (x - centerX) / centerX;
      const normalizedY = (y - centerY) / centerY;
      const maxTilt = 3;
      setTiltY(normalizedX * -maxTilt);
      setTiltX(normalizedY * maxTilt);
    };

    const handleMouseLeave = () => {
      setActiveEdge("none");
      setIsHovering(false);
      setTiltX(0);
      setTiltY(0);
    };

    const getBoxDynamicStyle = () => {
      // Use the 'glowColor' prop for the border glow
      const defaultBorderColor = "rgb(55, 65, 81)"; // Tailwind's gray-700 equivalent

      let borderTop = `1px solid ${defaultBorderColor}`;
      let borderBottom = `1px solid ${defaultBorderColor}`;
      let borderLeft = `1px solid ${defaultBorderColor}`;
      let borderRight = `1px solid ${defaultBorderColor}`;

      switch (activeEdge) {
        case "top":
          borderTop = `1px solid ${project.glowColor}`;
          break;
        case "bottom":
          borderBottom = `1px solid ${project.glowColor}`;
          break;
        case "left":
          borderLeft = `1px solid ${project.glowColor}`;
          break;
        case "right":
          borderRight = `1px solid ${project.glowColor}`;
          break;
        default:
          break;
      }

      return {
        borderTop: borderTop,
        borderBottom: borderBottom,
        borderLeft: borderLeft,
        borderRight: borderRight,
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: "border-color 0.1s ease-out, transform 0.1s ease-out",
      };
    };

    return (
      <div
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-gray-800 text-white rounded-xl p-8 w-full overflow-hidden"
        style={getBoxDynamicStyle()}
      >
        {isHovering && (
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              left: internalGlowPos.x,
              top: internalGlowPos.y,
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "300px",
              // Use the 'glowColor' prop for the internal radial gradient glow
              background: `radial-gradient(circle at center, ${project.glowColor
                .replace("rgb", "rgba")
                .replace(")", ", 0.2)")} 0%, ${project.glowColor
                .replace("rgb", "rgba")
                .replace(")", ", 0)")} 70%)`,
              filter: "blur(15px)",
              transition: "transform 0.05s ease-out",
              zIndex: 0,
            }}
          ></div>
        )}

        {/* Write Projects Details */}

        {/* Projects thumbnail, heading and button live and code */}
        <div className="flex flex-col md:flex-row justify-between gap-y-5">
          <img
            src={project.thumbnail}
            alt="project-thumbnail"
            className="w-full md:w-[40%] h-60"
          />
          <div className="flex flex-col gap-5 w-full md:w-[55%]">
            <h1 className="text-4xl font-bold">{project.projectName}</h1>
            <p className="text-[15px] text-gray-300 font-medium">
              {project.projectSubTitle}
            </p>

            {/* Live link and github area */}
            <div className="flex flex-row gap-10">
              <a href={project.liveLink} target="_blank">
                <button className="bg-blue-500 px-6 py-2.5 rounded-lg text-white text-sm font-bold cursor-pointer transition-all hover:shadow-lg hover:bg-blue-600">
                  {project.liveBtn}
                </button>
              </a>
              <a href={project.githubLink} target="_blank">
                <button className="bg-yellow-600 px-6 py-2.5 rounded-lg text-white text-sm font-bold cursor-pointer transition-all hover:shadow-lg hover:bg-yellow-500">
                  {project.gitHubBtn}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Description */}
        <ul className="my-8 flex flex-col gap-3">
          <h2 className="font-bold text-xl">Features: </h2>
          {project.description.map((desc) => (
            <li key={desc._id} className="text-gray-200 text-base flex">
              {desc._id}
              {"."} {desc.info}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-5">
          <h2 className="font-bold text-xl">Tech Stack Used: </h2>
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-800 text-gray-300 px-4 py-1 rounded-full text-sm font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {projectsList.map((project, index) => (
        <ProjectBox project={project} key={index} />
      ))}
    </>
  );
};

export default ProjectList;
