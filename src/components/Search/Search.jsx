import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import styles from "../Search/Search.module.css";
import SearchSuggestion from "./SearchSuggestion/SearchSuggestion";

function Search({ placeholder, data }) {
  // console.log("data", data);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    performSearch(search);
  };

  const performSearch = (search) => {
    const filterData = data.filter((item) =>
      item.title.toLowerCase().startsWith(search)
    );
    setSearchResult(filterData);
  };
  return (
    <div className={styles.container}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          className={styles.search}
          placeholder={placeholder}
          required
          value={search}
          onChange={handleSearch}
        />
        {search && (
          <div className={styles.searchResultWrapper}>
            {searchResult.map((item) => (
              <SearchSuggestion data={item} />
            ))}
          </div>
        )}
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default Search;
