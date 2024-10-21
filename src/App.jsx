// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./App.css";
// import {
//   getTrendingMovies,
//   getLanguages,
//   getInTheatersMovies,
// } from "./themoviedb";
// import Country from "./Components/Country-cards/Countries";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import InTeathers from "./Components/In-theaters-card/In-theaters-card";
// import PopularMovies from "./Components/Popular-movies-card/Popular-movies-card";
// import SearchBar from "./Components/Search-bar/Search-bar";
// import PopularCountries from "./Components/Country-cards/Countries";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import CountryMovies from "./Components/CountryMovies/CountryMovies";

// function App() {
//   <Router>
//     <Routes>
//       <Route path="/" element={<PopularCountries />} />
//       <Route path="/movies/:countryCode" element={<CountryMovies/>} />
//     </Routes>
//   </Router>;

//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [language, setLanguage] = useState([]);
//   const [inTheaters, setInTheaters] = useState([]);

//   const PreviousArrow = ({ className, style, onClick }) => {
//     return (
//       <div className={className} onClick={onClick}>
//         <FaArrowLeft style={{ color: "gray", fontSize: "24px" }} />
//       </div>
//     );
//   };

//   const NextArrow = ({ className, style, onClick }) => {
//     return (
//       <div className={className} onClick={onClick}>
//         <FaArrowRight style={{ color: "gray", fontSize: "24px" }} />
//       </div>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PreviousArrow />,
//   };

//   useEffect(() => {
//     async function fetchTrendingMovies() {
//       const dados = await getTrendingMovies();
//       setTrendingMovies(dados.results);
//     }
//     fetchTrendingMovies();
//   }, []);

//   useEffect(() => {
//     async function fetchLanguage() {
//       const dados = await getLanguages();
//       setLanguage(dados);
//     }
//     fetchLanguage();
//   }, []);

//   useEffect(() => {
//     async function fetchInTheaters() {
//       const dados = await getInTheatersMovies();
//       setInTheaters(dados.results);
//     }
//     fetchInTheaters();
//   }, []);

//   return (
//     <div className="app-container">
//       <Header />
//       <main>
//         <div className="search-bar-div">
//           <h3 className="discover-h3">Discover Movies from Around the World</h3>
//           <SearchBar />
//         </div>

//         <h3 className="country-section-h3">MOST POPULAR COUNTRIES BY MOVIES</h3>
//         <PopularCountries />

//         <h3 className="in-theaters-title">IN THEATERS</h3>
//         <Slider {...settings}>
//           {inTheaters.length > 0 ? (
//             inTheaters
//               .slice(0, 10)
//               .map((movie) => (
//                 <InTeathers
//                   key={movie.id}
//                   title={movie.title}
//                   release_date={movie.release_date}
//                   img={movie.poster_path}
//                 />
//               ))
//           ) : (
//             <p>Loading in-theater movies...</p>
//           )}
//         </Slider>

//         <h3>POPULAR MOVIES</h3>
//         <Slider {...settings}>
//           {trendingMovies.length > 0 ? (
//             trendingMovies
//               .slice(0, 10)
//               .map((movie) => (
//                 <PopularMovies
//                   key={movie.id}
//                   title={movie.title}
//                   popularity={movie.popularity}
//                   img={movie.poster_path}
//                 />
//               ))
//           ) : (
//             <p>Loading movies...</p>
//           )}
//         </Slider>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import {
  getTrendingMovies,
  getLanguages,
  getInTheatersMovies,
} from "./themoviedb";
import Country from "./Components/Country-cards/Countries";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import InTeathers from "./Components/In-theaters-card/In-theaters-card";
import PopularMovies from "./Components/Popular-movies-card/Popular-movies-card";
import SearchBar from "./Components/Search-bar/Search-bar";
import PopularCountries from "./Components/Country-cards/Countries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CountryMovies from "./Components/CountryMovies/CountryMovies";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [language, setLanguage] = useState([]);
  const [inTheaters, setInTheaters] = useState([]);

  const PreviousArrow = ({ className, style, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <FaArrowLeft style={{ color: "gray", fontSize: "24px" }} />
      </div>
    );
  };

  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <FaArrowRight style={{ color: "gray", fontSize: "24px" }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
    async function fetchLanguage() {
      const dados = await getLanguages();
      setLanguage(dados);
    }
    fetchLanguage();
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
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/movies/:countryCode" element={<CountryMovies />} />
            {/* Você pode adicionar outras rotas aqui, se necessário */}
          </Routes>

          <div className="search-bar-div">
            <h3 className="discover-h3">
              Discover Movies from Around the World
            </h3>
            <SearchBar />
          </div>

          <h3 className="country-section-h3">
            MOST POPULAR COUNTRIES BY MOVIES
          </h3>
          <PopularCountries />

          <h3 className="in-theaters-title">IN THEATERS</h3>
          <Slider {...settings}>
            {inTheaters.length > 0 ? (
              inTheaters
                .slice(0, 10)
                .map((movie) => (
                  <InTeathers
                    key={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    img={movie.poster_path}
                  />
                ))
            ) : (
              <p>Loading in-theater movies...</p>
            )}
          </Slider>

          <h3>POPULAR MOVIES</h3>
          <Slider {...settings}>
            {trendingMovies.length > 0 ? (
              trendingMovies
                .slice(0, 10)
                .map((movie) => (
                  <PopularMovies
                    key={movie.id}
                    title={movie.title}
                    popularity={movie.popularity}
                    img={movie.poster_path}
                  />
                ))
            ) : (
              <p>Loading movies...</p>
            )}
          </Slider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
