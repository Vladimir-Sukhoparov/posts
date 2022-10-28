import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import PagesIcon from '@mui/icons-material/Pages';
import ImageIcon from '@mui/icons-material/Image';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

import "./index.css";

export const SidePanel = () => {
  return (
    <div className="panel">
      <Link to="/" className="line">
        <HomeIcon fontSize="medium" color="inherit" sx={{ ml: 1,mr:1, pt:"5px" }} />
        <Typography sx={{ color: "text.secondary", fontSize: "20px" }}>
          Home
        </Typography>
      </Link>

      <Link to="/posts" className="line">
      <PagesIcon fontSize="medium" color="inherit" sx={{ ml: 1,mr:1, pt:"5px" }} />
        <Typography sx={{ fontSize: "20px", color: "text.secondary" }}>
          Posts
        </Typography>
      </Link>

      <Link to="/photos" className="line">
      <ImageIcon fontSize="medium" color="inherit" sx={{ ml: 1,mr:1, pt:"5px" }}/>
        <Typography sx={{ fontSize: "20px", color: "text.secondary" }} >
          Photos
        </Typography>
      </Link>

      <Link to="/pic" className="line">
      <WallpaperIcon fontSize="medium" color="inherit" sx={{ ml: 1,mr:1, pt:"5px" }} />
        <Typography sx={{ fontSize: "20px", color: "text.secondary" }} >
          Rnd_pic
        </Typography>
      </Link>
    </div>
  );
};
