import React from 'react';

import {  Divider } from "@mui/material";
import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import styles from './index.module.css'


export const Card = (itemPost:any) => {
  return (
    <div className={styles.card}>
      <ListItem>
        <ListItemText
          primary={<Typography variant="body1">UserID: {itemPost.userId}</Typography>}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary={<Typography variant="body1">ID: {itemPost.id}</Typography>}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<Typography variant="body1">Title: {itemPost.title}</Typography>}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<Typography variant="body1">Body: {itemPost.body}</Typography>}
        />
      </ListItem>
    </div>
  );
};

