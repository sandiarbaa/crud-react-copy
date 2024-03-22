import React from "react";

const Label = ({ htmlFor, judul }) => {
  return (
    <label htmlFor={htmlFor} className="font-semibold md:text-lg">
      {judul} :
    </label>
  );
};

export default Label;
