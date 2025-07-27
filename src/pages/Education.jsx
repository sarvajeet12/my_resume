import React from "react";
import EducationTimeline from "../components/education/EducationTimeline";
import Heading from "../components/common/Heading";

const Education = () => {
  return (
    <div className="py-20 max-w-7xl m-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] space-y-10 text-white">
      <Heading
        headingValue={"Education"}
        subHeading={
          "Academic background that built my technical and problem-solving foundation."
        }
      />
      <EducationTimeline />
    </div>
  );
};

export default Education;
