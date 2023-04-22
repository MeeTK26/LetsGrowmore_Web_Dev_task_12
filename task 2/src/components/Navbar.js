import React from "react";

const Navbar = ({ onGetUsers }) => {
  return (
    <nav>
      <div className="brand">Brand Name<button onClick={onGetUsers}>Get Users</button></div>
      
    </nav>
  );
};

export default Navbar;
