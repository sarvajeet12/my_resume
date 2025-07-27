import React from "react";
import Heading from "../components/common/Heading";
import ProjectList from "../components/projects/ProjectList";
import Btn from "../components/common/Btn";

const Projects = () => {
  return (
    <div className="py-20 max-w-7xl m-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] space-y-10 text-white">
      <Heading
        headingValue={"Projects"}
        subHeading={
          "Real-world applications built using modern tools and clean code."
        }
      />
      <ProjectList />
      <div className="text-center hidden">
        <Btn btnName={"More Projects"} />
      </div>
    </div>
  );
};

export default Projects;
