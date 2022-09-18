import React, { useState, useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import { Home } from "./components/Home";
import { Albums } from "./components/Albums";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import api from "./utils/api";

import "./App.css";
import { Photos } from "./components/Photos";
import { Card } from "./components/Card";

function App() {
  const [albums, setAlbums] = useState(null);
  

  useEffect(() => {
    api
      .getAlbums()
      .then((list) => setAlbums(list))
      .catch((err) => alert(err));
  }, []);

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    api
      .getPosts()
      .then((list) => setPosts(list))
      .catch((err) => alert(err));
  }, []);

  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    api
      .getPhotos()
      .then((list) => setPhotos(list))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="posts/" element={<Posts listPosts={posts} />} />
          <Route path="albums" element={<Albums listAlbums={albums} />} />
          <Route path="photos" element={<Photos listPhotos={photos} />} />
          <Route path="card/" element={<Card />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
