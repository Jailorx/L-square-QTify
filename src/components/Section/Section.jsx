import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState();

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };
  return (
    <div>
      <div className={styles.header}>
        <p>{title}</p>
        <p className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </p>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Section;
