import React from "react";

const Heading = ({ headingValue, subHeading }) => {
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl text-white font-bold relative">
        <span>{headingValue}</span>
        <div className="flex items-center">
          <div className="w-[20px] h-[20px] rounded-full bg-blue-500 "></div>
          <div
            className={`w-40 ${
              headingValue === "Experience" && "w-55"
            } lg:w-65 h-[4px] bg-blue-500 rounded-tr-xl rounded-br-xl`}
          />
        </div>
      </h1>
      <p className="text-slate-300 mt-4 md:text-[18px]">{subHeading}</p>
    </div>
  );
};

export default Heading;
