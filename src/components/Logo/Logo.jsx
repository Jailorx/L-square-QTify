import React from "react";
import WebsiteLogo from "../../assets/logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <img src={WebsiteLogo} alt="logo" width="67px" />
    </div>
  );
}

export default Logo;
