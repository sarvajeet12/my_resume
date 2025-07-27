import React from "react";

import Heading from "../components/common/Heading";
import Connect from "../components/contact/Connect";

const Contact = () => {
  return (
    <div
      className="py-20 max-w-7xl m-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] space-y-10 text-white"
      id="contact"
    >
      <Heading
        headingValue={"Contact"}
        subHeading={`Let’s connect and build something meaningful together — reach out now!`}
      />
      <Connect />
    </div>
  );
};

export default Contact;
