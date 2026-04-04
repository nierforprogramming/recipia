import React from "react";

const SectionHeading = ({ text, className }) => {
  return (
    <div>
      <h1
        className={`font-display my-8 font-bold text-2xl lg:text-3xl ${className}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default SectionHeading;
