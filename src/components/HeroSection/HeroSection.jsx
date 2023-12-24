import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/HeroImage.png";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <div className={styles.heroImage}>
        <img src={HeroImage} alt="hero_image" />
      </div>
    </div>
  );
};

export default HeroSection;
