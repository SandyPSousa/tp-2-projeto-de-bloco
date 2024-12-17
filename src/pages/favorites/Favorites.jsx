import React, { useState, useEffect } from "react";

import { Grid, Typography, Container } from "@mui/material";
import { MovieCard } from "../../components";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Favorites
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant="body1">You don't have favorites.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
             
              <MovieCard
                id={movie.id}
                title={movie.title}
                img={movie.img}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
