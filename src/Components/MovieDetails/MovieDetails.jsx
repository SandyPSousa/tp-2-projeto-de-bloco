import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../themoviedb";
import { CircularProgress, Typography, Box, Button } from "@mui/material";

export default function MovieDetails() {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      const movieData = await getMovieDetails(movieId);
      setMovie(movieData);
      setLoading(false);
    }

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
      }}
    >
      {movie && (
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '600px',
            textAlign: 'center',
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {movie.title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            {movie.overview}
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '5px' }}>
            Rating: {movie.vote_average}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px' }}>
            Release Date: {movie.release_date}
          </Typography>
          <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
            Assistir Trailer
          </Button>
        </Box>
      )}
    </Box>
  );
}
