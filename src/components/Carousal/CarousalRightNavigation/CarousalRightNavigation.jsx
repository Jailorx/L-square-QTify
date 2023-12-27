import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarousalRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

const CarousalLeftNavigation = () => {
  const swiper = useSwiper();
  const [isEnding, setIsEnding] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => setIsEnding(swiper.isEnd));
  }, []);

  return (
    <div className={styles.rightNavigation}>
      {!isEnding && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarousalLeftNavigation;
