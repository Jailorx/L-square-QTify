import React, { useEffect, useState } from "react";
import styles from "./SearchSuggestion.module.css";

const SearchSuggestion = ({ data }) => {
  const [artist, setArtist] = useState("");
  useEffect(() => {}, []);
  const getArtists = (data) => {
    const artistSet = new Set();

    data.songs.forEach((song) => {
      song.artists.forEach((artist) => {
        artistSet.add(artist);
      });
    });

    const artistList = [...artistSet];
    setArtist(artistList);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <img src={data.image} alt="album_cover" />
        <div className={styles.about}>
          <p className={styles.albumName}>{data.title}</p>
          <p className={styles.albumArtists}>{artist}</p>
        </div>
      </div>
      <div className={styles.followers}>
        <p>{data.follows} Follows</p>
      </div>
    </div>
  );
};

export default SearchSuggestion;
