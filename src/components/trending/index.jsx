import { Box } from "@mui/material";
import { Carrossel, MovieCard } from "..";

export default function Trending({ movies }) {
  const trendingMovies = movies?.trendingMovies || [];

  return (
    <Box>
      <Carrossel>
        {trendingMovies.slice(0, 20).map((movie) => (
          <Box paddingInline="0.5rem" key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              popularity={movie.popularity}
              img={movie.poster_path}
            />
          </Box>
        ))}
      </Carrossel>
    </Box>
  );
}
