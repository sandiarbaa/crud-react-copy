import React from "react";

const Button = ({ textButton, typeButton }) => {
  return (
    <button
      type={typeButton}
      className="w-full bg-blue-600 rounded-md py-1.5 text-lg font-bold text-white hover:bg-blue-700 md:py-2 md:text-xl md:tracking-wide"
    >
      {textButton}
    </button>
  );
};

export default Button;
