import React from "react";

import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar text="Search a album of your choice" />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
