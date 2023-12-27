import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousal from "../Carousal/Carousal";
import Filters from "../Filters/Filters";

const Section = ({ title, data, filterSource, type }) => {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(false);

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((res) => {
        const { data } = res;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div>
      <div className={styles.header}>
        <p>{title}</p>
        <p className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Collapse" : "Show all"}
        </p>
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress
          sx={{ color: (theme) => theme.palette.primary.main }}
        />
      ) : (
        <div className={styles.cardWrapper}>
          {carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card key={ele.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousal
              data={cardsToRender}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
