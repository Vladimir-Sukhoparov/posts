import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export const Pic = () => {
  let bodyWidth = parseInt(getComputedStyle(document.body).width) - 250;
  let bodyHeight = parseInt(getComputedStyle(document.body).height) - 200;

  const [urlPic, setUrlPic] = useState(
    `https://picsum.photos/${bodyWidth}/${bodyHeight}`
  );
  let handleClick = () => {
    setUrlPic(null);
    fetch(`https://picsum.photos/${bodyWidth}/${bodyHeight}`).then((res) =>
      setUrlPic(res.url)
    );
  };

  useEffect(() => {}, [urlPic]);

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
            alt="download"
          />
        )}
      </Link>
    </div>
  );
};
