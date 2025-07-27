import React from "react";
import Lottie from "lottie-react";
import animationData from "../components/lotties/animation.json";

const Intro = () => {
  return (
    <div className="max-w-7xl m-auto mt-16 md:mt-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[600px]"
      />
      <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold">
        SARVAJEET LAL SHAH
      </h1>
    </div>
  );
};

export default Intro;
