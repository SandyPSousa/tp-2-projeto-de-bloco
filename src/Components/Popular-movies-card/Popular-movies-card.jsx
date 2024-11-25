// import React from "react";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import "./Popular-movies-card.css";

// export default function PopularMovies(props) {
//   return (
//     <Card className="popular-movies-card">
//       <CardMedia
//         component="img"
//         image={`https://image.tmdb.org/t/p/original${props.img}`}
//         alt={props.title || "Movie Name"}
//         height="300"
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           {props.title || "Movie Name"}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Popularity: {props.popularity || "Popularity %"}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import "./Popular-movies-card.css";

// export default function PopularMovies(props) {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/movie/${props.id}`); // Usa o ID do filme na URL
//   };

//   return (
//     <Card className="popular-movies-card" onClick={handleCardClick} sx={{ cursor: "pointer" }}>
//       <CardMedia
//         component="img"
//         image={`https://image.tmdb.org/t/p/original${props.img}`}
//         alt={props.title || "Movie Name"}
//         height="300"
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           {props.title || "Movie Name"}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Popularity: {props.popularity || "Popularity %"}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import "./Popular-movies-card.css";

// export default function PopularMovies(props) {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     if (props.id) {  // Verificação adicional para garantir que o ID existe
//       navigate(`/movies/details/${props.id}`); // Usa o ID do filme na URL
//     } else {
//       console.error("ID do filme está indefinido.");
//     }
//   };

//   return (
//     <Card className="popular-movies-card" onClick={handleCardClick} sx={{ cursor: "pointer" }}>
//       <CardMedia
//         component="img"
//         image={`https://image.tmdb.org/t/p/original${props.img}`}
//         alt={props.title || "Movie Name"}
//         height="300"
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           {props.title || "Movie Name"}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Popularity: {props.popularity || "Popularity %"}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import "./Popular-movies-card.css";

// export default function PopularMovies(props) {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     if (props.id) {
//       navigate(`/movies/details/${props.id}`); // Atualizado para o caminho correto
//     } else {
//       console.error("ID do filme está indefinido.");
//     }
//   };

//   return (
//     <Card className="popular-movies-card" onClick={handleCardClick} sx={{ cursor: "pointer" }}>
//       <CardMedia
//         component="img"
//         image={`https://image.tmdb.org/t/p/original${props.img}`}
//         alt={props.title || "Movie Name"}
//         height="300"
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           {props.title || "Movie Name"}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Popularity: {props.popularity || "Popularity %"}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// import React from "react";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom"; // Importar useNavigate
// import "./Popular-movies-card.css";

// export default function PopularMovies(props) {
//   const navigate = useNavigate(); // Instanciar o hook

//   const handleClick = () => {
//     navigate(`/movies/details/${props.id}`); // Navega para os detalhes do filme ao clicar no card
//   };

//   return (
//     <Card className="popular-movies-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
//       <CardMedia
//         component="img"
//         image={`https://image.tmdb.org/t/p/original${props.img}`}
//         alt={props.title || "Movie Name"}
//         height="300"
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           {props.title || "Movie Name"}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Popularity: {props.popularity || "Popularity %"}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// import React from "react";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import "./Popular-movies-card.css";

// export default function PopularMovies(props) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/movies/details/${props.id}`); // Certifique-se de que `props.id` esteja correto
//   };

//   return (
//     <Card className="popular-movies-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
//       <CardMedia
//         component="img"
//         image={`https://image.tmdb.org/t/p/original${props.img}`}
//         alt={props.title || "Movie Name"}
//         height="300"
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           {props.title || "Movie Name"}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Popularity: {props.popularity || "Popularity %"}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Popular-movies-card.css";

export default function PopularMovies(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`Navigating to movie with ID: ${props.id}`); // Verifique o ID aqui
    navigate(`/movies/details/${props.id}`); // Navegar para a página de detalhes do filme
  };

  return (
    <Card className="popular-movies-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/original${props.img}`}
        alt={props.title || "Movie Name"}
        height="300"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {props.title || "Movie Name"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popularity: {props.popularity || "Popularity %"}
        </Typography>
      </CardContent>
    </Card>
  );
}
