import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { getPopularMoviesByCountry } from "../../themoviedb"; 
import { Card, CardMedia, CardContent, Typography, Grid, CircularProgress } from "@mui/material";

export default function CountryMovies() {
  const { countryCode } = useParams(); 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getPopularMoviesByCountry(countryCode);
      setMovies(moviesData);
      setLoading(false);
    }

    fetchMovies();
  }, [countryCode]);

  const handleMovieClick = (movieId) => {
    navigate(`/movies/details/${movieId}`); 
  };

  return (
    <section>
      <Typography variant="h4" gutterBottom>
        Popular Movies in {countryCode}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {movies.map((movie, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card onClick={() => handleMovieClick(movie.id)} sx={{ cursor: 'pointer', boxShadow: 3 }}> 
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  height="500"
                  sx={{
                    objectFit: 'cover',
                    width: '100%', 
                    maxHeight: '500px', 
                  }}
                />
                <CardContent sx={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
                  <Typography variant="h6" noWrap sx={{ fontWeight: 'bold' }}>{movie.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {movie.vote_average}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </section>
  );
}
