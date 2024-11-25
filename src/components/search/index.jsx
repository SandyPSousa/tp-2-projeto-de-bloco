import { Autocomplete, Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./search.module.css";
import { useMoviesContext } from "../../contexts/movies";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function merge(arr1, arr2) {
  const obj = {};
  const arrConcat = [...arr1, ...arr2];
  arrConcat.map((item) => {
    Object.assign(obj, { [item.id]: { id: item.id, label: item.title } });
  });
  return Object.values(obj);
}

export default function Search() {
  const [movieId, setMovieId] = useState();

  const movies = useMoviesContext();

  const options = merge(movies?.inTheaters, movies?.trendingMovies);

  const navigate = useNavigate();

  const handleClick = () => {
    if (!movieId) return;
    navigate(`/movies/details/${movieId}`);
  };

  return (
    <Box className={styles.search}>
      <Autocomplete
        disablePortal
        freeSolo
        options={options}
        size="small"
        renderInput={(params) => <TextField {...params} label="Movie" />}
        onChange={(event, newValue) => {
          setMovieId(newValue?.id);
        }}
      />
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        onClick={handleClick}
      >
        Search
      </Button>
    </Box>
  );
}
