import React from "react";

import { Card as CardMUI } from "@mui/material";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import "./index.css";

export const Post = ({ itemPost }) => {
  return (
    <div className="App-post">
      <CardMUI sx={{ width: 400, margin: 1, height: 200 }}>
        <ListItem>
          <ListItemText
            primary={<Typography variant="body1">{itemPost.title}</Typography>}
          />
        </ListItem>
        <Divider />

        <ListItem sx={{ alignItems: "flex-start" }}>
          <p> {itemPost.body}</p>
        </ListItem>
      </CardMUI>
    </div>
  );
};
