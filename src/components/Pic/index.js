import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./assets-pic/rnd.webp";
import Picture from "./assets-pic/rnd.webp";

import "./index.css";

export const Pic = () => {
  let bodyWidth = parseInt(getComputedStyle(document.body).width) - 250;
  let bodyHeight = parseInt(getComputedStyle(document.body).height) - 200;

  const [urlPic, setUrlPic] = useState(Picture);
  console.log(urlPic);
  let handleClick = () => {
    setUrlPic(null);
    fetch(`https://picsum.photos/${bodyWidth}/${bodyHeight}`).then((res) =>
      setUrlPic(res.url)
    );
  };

  return (
    <div className="App-pic">
      <Link to="/pic">
        {!urlPic ? (
          <CircularProgress color="inherit" />
        ) : (
          <img
            className="pic"
            src={urlPic}
            onClick={handleClick}
            alt="click to view random pic"
          />
        )}
      </Link>
    </div>
  );
};
