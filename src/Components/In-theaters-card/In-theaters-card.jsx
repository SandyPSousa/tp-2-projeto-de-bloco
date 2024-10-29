import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./In-theaters-card.css";

export default function InTheaters(props) {
  return (
    <Card className="in-theaters-card">
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/original${props.img}`}
        alt={props.title || "Nome filme"}
        height="300"
        width="300"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className="exibition-date">
          {props.release_date || "Date"}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {props.title || "Nome filme"}
        </Typography>
      </CardContent>
    </Card>
  );
}

