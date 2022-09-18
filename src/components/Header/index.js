import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import "./index.css";

export const Header = () => {
  return (
    <div className="App-header">
      <Link to="/">
        <Typography sx={{ ml: 3, color: "text.secondary" }} variant="h6">
          Home
        </Typography>
      </Link>

      <Link to="/posts">
        <Typography sx={{ ml: 3, color: "text.secondary" }} variant="h6">
          Posts
        </Typography>
      </Link>

      <Link to="/albums">
        <Typography sx={{ ml: 3, color: "text.secondary" }} variant="h6">
          Albums
        </Typography>
      </Link>

      <Link to="/photos">
        <Typography sx={{ ml: 3, color: "text.secondary" }} variant="h6">
          Photos
        </Typography>
      </Link>
    </div>
  );
};
