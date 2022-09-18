import React from "react";
import { Album } from "../Album";

import "./index.css";

export const Albums = ({ listAlbums }) => {
  return (
    <div className="App-albums">
      {listAlbums?.map((item) => (
        <Album key={item._id} itemAlbum={item} />
      ))}
    </div>
  );
};
