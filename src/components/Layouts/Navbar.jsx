import React from "react";

const Navbar = () => {
  const username = localStorage.getItem("username") || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  return (
    <nav className="absolute bg-blue-600 h-16 w-full flex justify-between items-center p-5">
      <div className="text-white text-lg">{username}</div>
      <button
        type="button"
        className="text-black text-lg px-4 py-1 bg-white rounded-md border font-semibold hover:bg-gray-400 duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
