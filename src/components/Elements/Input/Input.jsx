import React from "react";

const Input = ({ type, name, id, value = "", readOnly }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="border rounded-md w-full px-3 py-1"
      defaultValue={value}
      autoComplete="off"
      readOnly={readOnly}
    />
  );
};

export default Input;
