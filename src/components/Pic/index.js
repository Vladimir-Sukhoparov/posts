import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

export const Pic = () => {
  const [urlPic, setUrlPic] = useState("https://picsum.photos/800/600");

  // eslint-disable-next-line
  let url;
  let handleClick = () => {
    setUrlPic(null);
    url = fetch("https://picsum.photos/800/600");
  };

  useEffect(() => {
    setUrlPic("https://picsum.photos/800/600");
  }, [urlPic]);
  return (
    <div className="App-pic">
      <Link to="/pic">
        {/* <div className="loader" /> */}
        <img
          className="pic"
          src={urlPic}
          onClick={handleClick}
          alt="download"
        />
      </Link>
    </div>
  );
};
