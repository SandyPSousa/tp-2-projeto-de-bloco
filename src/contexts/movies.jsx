import { createContext, useContext, useEffect, useState } from "react";
import { getInTheatersMovies, getTrendingMovies } from "../themoviedb";

const MoviesContext = createContext(null);

export function useMoviesContext() {
  const movies = useContext(MoviesContext);
  return movies;
}

export function MoviesProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [inTheaters, setInTheaters] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const dados = await getTrendingMovies();
      setTrendingMovies(dados.results);
    }
    async function fetchInTheaters() {
      const dados = await getInTheatersMovies();
      setInTheaters(dados.results);
    }
    fetchTrendingMovies();
    fetchInTheaters();
  }, []);

  return (
    <MoviesContext.Provider value={{ trendingMovies, inTheaters }}>
      {children}
    </MoviesContext.Provider>
  );
}
