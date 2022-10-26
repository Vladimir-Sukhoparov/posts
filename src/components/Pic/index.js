import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export const Pic = () => {
  const [urlPic, setUrlPic] = useState("https://picsum.photos/800/600");

  let handleClick = () => {
    setUrlPic(null);
    fetch("https://picsum.photos/800/600").then((res) => setUrlPic(res.url));
  };

  useEffect(() => {
    console.log(urlPic);
  }, [urlPic]);

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
