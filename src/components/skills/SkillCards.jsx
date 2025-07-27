import React from "react";
import { skills } from "../../constant/constants";

const SkillCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
      {skills.map((item, index) => (
        <div className="rounded-xl p-5 sm:p-10 bg-gray-800 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:border-t-3 hover:border-blue-400">
          <h1 className="text-xl font-medium">{item.title}</h1>
          <div className="flex flex-wrap gap-5 sm:gap-10 mt-5">
            {item.tools.map((tech, index) => (
              <div
                key={index}
                className="border-1 px-2 md:px-5 py-1 border-slate-400 rounded-full flex items-center justify-center gap-x-1 md:gap-x-2"
              >
                <img
                  src={tech.icon}
                  alt={tech.icon}
                  className="h-8 w-8 border-1 border-slate-400 rounded-full"
                />
                <h4 className="text-xs sm:text-sm text-center">
                  {tech.techStack}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
