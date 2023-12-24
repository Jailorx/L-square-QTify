import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import styles from "../Search/Search.module.css";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.search} placeholder={placeholder} required />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Search;
