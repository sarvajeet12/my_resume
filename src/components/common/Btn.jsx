import React from "react";

const Btn = ({ btnName, path }) => {
  return (
    <a href={path} target="_blank">
      <button className=" bg-blue-500 px-6 py-2.5 rounded-lg text-white text-sm cursor-pointer transition-all hover:shadow-lg hover:bg-blue-600 font-bold">
        {btnName}
      </button>
    </a>
  );
};

export default Btn;
