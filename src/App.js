import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
} from "../src/components/api/api";

function App() {
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <div className="App">
      <Navbar />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      {/* <HeroSection />
      <Section /> */}
    </div>
  );
}

export default App;
