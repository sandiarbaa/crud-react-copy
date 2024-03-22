import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = ({ prefix, type, name, judul, value, readOnly }) => {
  return (
    <div className="mb-5">
      <Label htmlFor={`${name}-${prefix}`} judul={judul} />
      <Input
        type={type}
        name={name}
        id={`${name}-${prefix}`}
        value={value}
        readOnly={readOnly}
      />
    </div>
  );
};

export default InputForm;
