import React from "react";

import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "../../App.css";

export const Photo = ({ itemPhoto }) => {
  return (
    <div className="App-content">
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="body1">
              AlbumID: {itemPhoto.albumId}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary={<Typography variant="body1">ID: {itemPhoto.id}</Typography>}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="body1">Title: {itemPhoto.title}</Typography>
          }
        />
      </ListItem>
      <ListItem sx={{justifyContent:'center'}}>
      <img src={itemPhoto?.thumbnailUrl} alt="something" />
      </ListItem>
    </div>
  );
};
