import React from "react";

import { Card as CardMUI } from "@mui/material";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./index.css";

export const Album = ({ itemAlbum }) => {
  return (
    <div className="App-post">
      <CardMUI sx={{ width: 400, margin: 1, height: 200 }}>
        <ListItem>
          <ListItemText
            primary={<Typography variant="body1">{itemAlbum.title}</Typography>}
          />
        </ListItem>
      </CardMUI>
    </div>
  );
};
