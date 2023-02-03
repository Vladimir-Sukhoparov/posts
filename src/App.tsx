import React, { useEffect, useState } from "react";

import "./App.css";

import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Pic } from "./components/Pic";
import { Home } from "./components/Home";

import { About } from "./components/About";
import getPosts from "./utils/apiPosts";
import { Card } from "./components/Card";

function App() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts.then((list) => {
      setPosts(list);
    });
  }, []);

  console.log(posts);

  return (
    <div className="app">
      <Navigation />
      <div id="container" className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="posts"
            element={posts.map((item: any) => (
              <Card key={item.id} {...item} />
            ))}
          />
          <Route path="pic" element={<Pic />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
