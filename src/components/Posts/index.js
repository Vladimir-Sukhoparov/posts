import React from "react";
import { Post } from "../Post";

import "./index.css";

export const Posts = ({ listPosts }) => {
  return (
    <div className="App-posts">
      {listPosts?.map((item) => (
        <Post key={item._id} itemPost={item} />
      ))}
    </div>
  );
};
