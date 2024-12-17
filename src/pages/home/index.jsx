import { Box, Typography } from "@mui/material";
import styles from "./home.module.css";
import { Countries, Theaters, Trending } from "../../components";
import { useMoviesContext } from "../../contexts/movies";

export default function Home() {
  const movies = useMoviesContext();

  return (
    <Box className={styles.home}>
      <Box component="section" className={styles.home_section}>
        <Typography variant="h5">POPULAR COUNTRIES</Typography>
        <Countries />
      </Box>
      <Box component="section" className={styles.home_section}>
        <Typography variant="h5">IN THEATERS</Typography>
        <Theaters movies={movies} />
      </Box>
      <Box component="section" className={styles.home_section}>
        <Typography variant="h5">POPULAR MOVIES</Typography>
        <Trending movies={movies} />
      </Box>
    </Box>
  );
}
