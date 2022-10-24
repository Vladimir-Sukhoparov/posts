import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import api from "./utils/api";

import "./App.css";
import { Photos } from "./components/Photos";
import { Pic } from "./components/Pic";

function App() {
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
    <div className="content">
      <div className="content-container">
        <Routes>
          <Route path="/posts" element={<Posts listPosts={posts} />} />
          <Route path="/photos" element={<Photos listPhotos={photos} />} />
          <Route path="/pic" element={<Pic />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
