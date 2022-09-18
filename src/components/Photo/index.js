import React from "react";

import { Card as CardMUI, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./index.css";


export const Photo = ({ itemPhoto }) => {
  
  return (
    <div className="App-post">
      <CardMUI sx={{ width: 400, margin: 1, height: 200 }}>
        <ListItem>
          <ListItemText
            primary={<Typography variant="body1">{itemPhoto.title}</Typography>}
          />
        </ListItem>
        <Divider />
        
        <img src={itemPhoto?.url} alt="something" />
        
      </CardMUI>
    </div>
  );
};
