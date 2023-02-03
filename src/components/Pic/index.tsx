import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import styles from "./index.module.css";
import apiRndPic from "../../utils/apiRndPic";

export const Pic = () => {
  const [urlPic, setUrlPic] = useState(null);
  useEffect(() => {
    apiRndPic.then((pic: any) => {
      setUrlPic(pic.url);
    });
  }, []);

  function handleClick() {
    setUrlPic(null);
    fetch(`https://picsum.photos/1100/600`).then((res:any) =>
    setUrlPic(res.url)
  );
  }

  return (
    <div className={styles.rndPic}>
      <Link to="/pic">
        {!urlPic ? (
          <CircularProgress color="info" />
        ) : (
          <img
            src={urlPic}
            onClick={handleClick}
            alt="click to view random pic"
          />
        )}
      </Link>
    </div>
  );
};
