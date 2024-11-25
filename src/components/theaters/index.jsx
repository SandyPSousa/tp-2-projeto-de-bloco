import { Box } from "@mui/material";
import { Carrossel, MovieCard } from "../../components";

export default function Theaters({ movies }) {
  const inTheaters = movies?.inTheaters || [];

  return (
    <Box>
      <Carrossel>
        {inTheaters.slice(0, 20).map((movie) => (
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
