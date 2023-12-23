import React from "react";
// import styles from "./Logo.module.css";
import logo from "../../assets/WebsiteLogo.svg";
const Logo = () => {
  return (
    <div
      style={{
        width: "67px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
