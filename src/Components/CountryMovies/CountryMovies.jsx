// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getPopularMoviesByCountry } from "../../themoviedb"; // Função para buscar os filmes populares

// export default function CountryMovies() {
//   const { countryCode } = useParams(); // Obter o código do país da URL
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchMovies() {
//       const moviesData = await getPopularMoviesByCountry(countryCode);
//       setMovies(moviesData);
//       setLoading(false);
//     }

//     fetchMovies();
//   }, [countryCode]);

//   return (
//     <section>
//       <h2>Popular Movies in {countryCode}</h2>
//       {loading ? (
//         <p>Loading movies...</p>
//       ) : (
//         <div className="movies-list">
//           {movies.map((movie, index) => (
//             <div key={index} className="movie-card">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                 alt={movie.title}
//                 className="movie-poster"
//               />
//               <p>{movie.title}</p>
//               <p>Rating: {movie.vote_average}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPopularMoviesByCountry } from "../../themoviedb"; 


export default function CountryMovies() {
  const { countryCode } = useParams(); // Obter o código do país da URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      const moviesData = await getPopularMoviesByCountry(countryCode);
      setMovies(moviesData);
      setLoading(false);
    }

    fetchMovies();
  }, [countryCode]);

  return (
    <section>
      <h2>Popular Movies in {countryCode}</h2>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className="movies-list">
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <p>{movie.title}</p>
              <p>Rating: {movie.vote_average}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
