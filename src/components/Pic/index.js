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


  //добавить иконку из миюай

  return (
    <div className="App-pic">
      <Link to="/pic">
        <img
          className="pic"
          src={urlPic}
          onClick={handleClick}
          alt='download...'
        />
      </Link>
    </div>
  );
};
