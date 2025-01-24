import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/FunctionalComponents/Home";
import PodcastPage from "./components/FunctionalComponents/PodcastPage";
import MyPlaylist from "./components/FunctionalComponents/MyPlaylist";

function App() {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (podcast) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, podcast]);
  };

  

  return (
    <Router>
      <div className="app">
        <header className="header">
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/podcasts"
            element={<PodcastPage addToPlaylist={addToPlaylist} />}
          />
          <Route path="/playlist" element={<MyPlaylist playlist={playlist} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

