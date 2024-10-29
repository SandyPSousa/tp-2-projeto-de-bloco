import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Popular-movies-card.css";

export default function PopularMovies(props) {
  return (
    <Card className="popular-movies-card">
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/original${props.img}`}
        alt={props.title || "Movie Name"}
        height="300"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {props.title || "Movie Name"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popularity: {props.popularity || "Popularity %"}
        </Typography>
      </CardContent>
    </Card>
  );
}
