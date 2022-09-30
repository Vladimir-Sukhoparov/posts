import React from "react";

import { Divider, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "../../App.css";

export const Album = ({ itemAlbum }) => {
  return (
    <div className="App-content">
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="body1">UserID: {itemAlbum.userId}</Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary={<Typography variant="body1">ID: {itemAlbum.id}</Typography>}
        />
      </ListItem>

      <ListItem>
        <ListItemText
          primary={
            <Typography variant="body1">Title: {itemAlbum.title}</Typography>
          }
        />
      </ListItem>
    </div>
  );
};
