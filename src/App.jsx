import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getTrendingMovies,
  getInTheatersMovies,
} from "./themoviedb";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import InTeathers from "./Components/In-theaters-card/In-theaters-card";
import PopularMovies from "./Components/Popular-movies-card/Popular-movies-card";
import SearchBar from "./Components/Search-bar/Search-bar";
import PopularCountries from "./Components/Country-cards/Countries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CountryMovies from "./Components/CountryMovies/CountryMovies";
import { Container, Typography, Box } from "@mui/material";
import MovieDetails from "./Components/MovieDetails/MovieDetails";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [inTheaters, setInTheaters] = useState([]);

  const PreviousArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <FaArrowLeft style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );

  const NextArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <FaArrowRight style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  useEffect(() => {
    async function fetchTrendingMovies() {
      const dados = await getTrendingMovies();
      setTrendingMovies(dados.results);
    }
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    async function fetchInTheaters() {
      const dados = await getInTheatersMovies();
      setInTheaters(dados.results);
    }
    fetchInTheaters();
  }, []);

  return (
    <Router>
      <Container maxWidth="lg" className="app-container">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Box my={4} textAlign="center">
                    <Typography variant="h4" gutterBottom>
                      Discover Movies from Around the World
                    </Typography>
                    <SearchBar />
                  </Box>

                  <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                      MOST POPULAR COUNTRIES BY MOVIES
                    </Typography>
                    <PopularCountries />
                  </Box>

                  <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                      IN THEATERS
                    </Typography>
                    <Slider {...settings}>
                      {inTheaters.length > 0 ? (
                        inTheaters.slice(0, 20).map((movie) => (
                          <InTeathers
                            key={movie.id}
                            title={movie.title}
                            release_date={movie.release_date}
                            img={movie.poster_path}
                          />
                        ))
                      ) : (
                        <Typography variant="body1">Loading in-theater movies...</Typography>
                      )}
                    </Slider>
                  </Box>

                  <Box my={4}>
                    <Typography variant="h5" gutterBottom>
                      POPULAR MOVIES
                    </Typography>
                    <Slider {...settings}>
                      {trendingMovies.length > 0 ? (
                        trendingMovies.slice(0, 10).map((movie) => (
                          <PopularMovies
                            key={movie.id}
                            title={movie.title}
                            popularity={movie.popularity}
                            img={movie.poster_path}
                          />
                        ))
                      ) : (
                        <Typography variant="body1">Loading movies...</Typography>
                      )}
                    </Slider>
                  </Box>
                </>
              }
            />
            <Route path="/movies/:countryCode" element={<CountryMovies />} />
            <Route path="/movies/details/:movieId" element={<MovieDetails />} /> 
          </Routes>
         
        </main>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
