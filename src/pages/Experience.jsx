import React from "react";
import Heading from "../components/common/Heading";
import ExperienceDetails from "../components/experience/ExperienceDetails";
import Btn from "../components/common/Btn";

const Experience = () => {
  return (
    <div className="py-20 max-w-7xl m-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] space-y-10 text-white">
      <Heading
        headingValue={"Experience"}
        subHeading={
          "Hands-on roles where I built, learned, and delivered real solutions."
        }
      />
      <ExperienceDetails />
      <div className="text-center hidden">
        <Btn btnName={"Load More"} />
      </div>
    </div>
  );
};

export default Experience;
