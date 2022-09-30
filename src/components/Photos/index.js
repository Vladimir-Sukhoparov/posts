import React from "react";
import { Photo } from "../Photo";

import "./index.css"

export const Photos = ({ listPhotos }) => {
  return (
    <div className="App-photos">
      {listPhotos?.map((item) => (
        <Photo key={item.id} itemPhoto={item} />
      ))}
    </div>
  );
};
