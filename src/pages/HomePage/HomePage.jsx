import React from "react";
import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import { fetchFilters } from "../../components/api/api";
import Faq from "../../components/Faq/Faq";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs, faq } = data;
  // console.log("faq", faq);
  const searchData = [...topAlbums, ...newAlbums];
  console.log("searchData:", searchData);
  return (
    <>
      <Navbar data={searchData} />
      <HeroSection />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
      </div>
      <Faq title="FAQs" data={faq} />
    </>
  );
};

export default HomePage;
