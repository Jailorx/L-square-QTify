import { useEffect } from "react";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousal.module.css";
import CarousalLeftNavigation from "./CarousalLeftNavigation/CarousalLeftNavigation";
import CarousalRightNavigation from "./CarousalRightNavigation/CarousalRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>;
};

function Carousal({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data} />
        <CarousalLeftNavigation />
        <CarousalRightNavigation />
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousal;
