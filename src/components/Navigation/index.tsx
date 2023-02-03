import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import ImageIcon from "@mui/icons-material/Image";
import InfoIcon from '@mui/icons-material/Info';

import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className={styles.nav}>
      <h1><a href="/">Hello everyone!</a></h1>
      <ul>
        <li>
          <HomeIcon
            fontSize="medium"
            color="inherit"
            sx={{ mr: 1, opacity:.6}}
          />
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <PagesIcon
            fontSize="medium"
            color="inherit"
            sx={{ mr: 1, opacity:.6}}
          />
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <ImageIcon
            fontSize="medium"
            color="inherit"
            sx={{ mr: 1, opacity:.6}}
          />
          <NavLink to="/pic">Rnd_pic</NavLink>
        </li>
        <li>
          <InfoIcon
            fontSize="medium"
            color="inherit"
            sx={{ mr: 1, opacity:.6}}
          />
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};
