// 


import React, { useEffect, useState } from "react";
// import PopularMovies from "./PopularMovies";
// import { getPopularMovies } from "../../themoviedb";

// export default function PopularMoviesList() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       const moviesData = await getPopularMovies();
//       setMovies(moviesData.results);
//     }

//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       {movies.map((movie) => (
//         <PopularMovies
//           key={movie.id}
//           id={movie.id}                 // Passando o ID do filme corretamente
//           img={movie.poster_path}        // Passando a imagem do filme
//           title={movie.title}            // Passando o título
//           popularity={movie.popularity}  // Passando a popularidade
//         />
//       ))}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import PopularMovies from "./PopularMovies";
// import { getPopularMovies } from "../../themoviedb"; // Importar a função aqui

// export default function PopularMoviesList() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       const moviesData = await getPopularMovies();
//       setMovies(moviesData); // Acessa diretamente os filmes retornados
//     }

//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       {movies.map((movie) => (
//         <PopularMovies
//           key={movie.id}
//           id={movie.id}                 // Passando o ID do filme
//           img={movie.poster_path}        // Passando o caminho da imagem
//           title={movie.title}            // Passando o título
//           popularity={movie.popularity}  // Passando a popularidade
//         />
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import PopularMovies from "./PopularMovies";
// import { getPopularMovies } from "../../themoviedb"; // Certifique-se de que o caminho esteja correto

// export default function PopularMoviesList() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const moviesData = await getPopularMovies();
//         setMovies(moviesData);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     }

//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       {movies.length > 0 ? (
//         movies.map((movie) => (
//           <PopularMovies
//             key={movie.id}
//             id={movie.id}
//             img={movie.poster_path}
//             title={movie.title}
//             popularity={movie.popularity}
//           />
//         ))
//       ) : (
//         <p>Loading movies...</p>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import PopularMovies from "./PopularMovies";
import { getPopularMovies } from "../../themoviedb"; // Ajuste o caminho conforme necessário

export default function PopularMoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesData = await getPopularMovies();
        console.log("Fetched movies:", moviesData); // Verifique os dados aqui
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <PopularMovies
            key={movie.id}
            id={movie.id} // Passando o ID corretamente
            img={movie.poster_path}
            title={movie.title}
            popularity={movie.popularity}
          />
        ))
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
}
