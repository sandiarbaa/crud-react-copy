import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = ({ prefix }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("username", e.target.username.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm prefix={prefix} type="text" name="username" judul="Username" />
      <InputForm
        prefix={prefix}
        type="password"
        name="password"
        judul="Password"
      />
      <Button textButton="Login" typeButton="submit" />
    </form>
  );
};

export default FormLogin;
