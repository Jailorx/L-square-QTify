import React from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import styles from "./SearchBar.module.css";

const SearchBar = ({ text }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input type="search" className={styles.input} placeholder={text} />
      <button type="submit" className={styles.search}>
        <img src={SearchIcon} alt="search_icon" />
      </button>
    </form>
  );
};

export default SearchBar;
