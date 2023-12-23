import React from "react";

import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="qtify_logo"
        width={67}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Logo;
