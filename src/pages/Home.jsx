import React from "react";
import ProfileData from "../components/Home/ProfileData";
import ProfileImage from "../components/Home/ProfileImage";

const Home = () => {
  return (
    <div className="max-w-7xl m-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-5 px-4 sm:px-6 lg:px-8 min- py-20 md:py-35">
      <ProfileData />
      <ProfileImage />
    </div>
  );
};

export default Home;
