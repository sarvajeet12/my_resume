import React from "react";
import CertificateList from "../components/certificate/CertificateList";
import Heading from "../components/common/Heading";

const Certificate = () => {
  return (
    <div className="py-20 max-w-7xl m-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] space-y-10 text-white">
      <Heading
        headingValue={"Certificate"}
        subHeading={
          "Verified achievements that reflect my skills, learning, and dedication."
        }
      />
      <CertificateList />
    </div>
  );
};

export default Certificate;
