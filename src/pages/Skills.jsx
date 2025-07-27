import React from "react";
import Heading from "../components/common/Heading";
import SkillCards from "../components/skills/SkillCards";

const Skills = () => {
  return (
    <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] space-y-10">
      <Heading
        headingValue={"Skills"}
        subHeading={"Technologies and tools I’ve used to build real projects."}
      />
      <SkillCards />
    </div>
  );
};

export default Skills;
