// import { Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// export default function MovieCard(props) {
//   const navigate = useNavigate();
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
//     setIsFavorite(favorites.some((movie) => movie.id === props.id));
//   }, [props.id]);

//   const handleClick = () => {
//     navigate(`/movies/details/${props.id}`);
//   };

//   const toggleFavorite = (e) => {
//     e.stopPropagation();

//     let favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
//     if (isFavorite) {
//       favorites = favorites.filter((movie) => movie.id !== props.id);
//     } else {
//       favorites.push({ id: props.id, title: props.title, img: props.img });
//     }

//     sessionStorage.setItem("favorites", JSON.stringify(favorites));
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <Card onClick={handleClick} style={{ cursor: "pointer", position: "relative" }}>
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
//       <IconButton
//         onClick={toggleFavorite}
//         style={{ position: "absolute", top: 10, right: 10, color: "red" }}
//       >
//         {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//       </IconButton>
//     </Card>
//   );
// }

// import { Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// export default function MovieCard(props) {
//   const navigate = useNavigate();
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
//     setIsFavorite(favorites.some((movie) => movie.id === props.id));
//   }, [props.id]);

//   const handleClick = () => {
//     navigate(`/movies/details/${props.id}`);
//   };

//   const toggleFavorite = (e) => {
//     e.stopPropagation();

//     let favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
//     if (isFavorite) {
//       favorites = favorites.filter((movie) => movie.id !== props.id);
//     } else {
//       favorites.push({ id: props.id, title: props.title, img: props.img });
//     }

//     sessionStorage.setItem("favorites", JSON.stringify(favorites));
//     setIsFavorite(!isFavorite);
//   };

//   // Formatar o número de popularidade com separadores de milhar
//   const formattedPopularity = props.popularity
//     ? new Intl.NumberFormat().format(props.popularity.toFixed(0))
//     : "N/A";

//   // Definir faixa de popularidade e cor
//   const popularityLevel = () => {
//     if (props.popularity > 5000) return { label: "Very Popular", color: "green" };
//     if (props.popularity > 1000) return { label: "Popular", color: "orange" };
//     return { label: " Unpopular", color: "red" };
//   };

//   const { label, color } = popularityLevel();

//   return (
//     <Card onClick={handleClick} style={{ cursor: "pointer", position: "relative" }}>
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
//         <Typography
//           variant="body2"
//           color={color}
//           style={{ fontWeight: "bold", fontSize: "1rem", marginTop: "8px" }}
//         >
//           {label} - {formattedPopularity}
//         </Typography>
//       </CardContent>
//       <IconButton
//         onClick={toggleFavorite}
//         style={{ position: "absolute", top: 10, right: 10, color: "red" }}
//       >
//         {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//       </IconButton>
//     </Card>
//   );
// }

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MovieCard(props) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((movie) => movie.id === props.id));
  }, [props.id]);

  const handleClick = () => {
    navigate(`/movies/details/${props.id}`);
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();

    let favorites = JSON.parse(sessionStorage.getItem("favorites")) || [];
    if (isFavorite) {
      favorites = favorites.filter((movie) => movie.id !== props.id);
    } else {
      favorites.push({ id: props.id, title: props.title, img: props.img });
    }

    sessionStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const formattedPopularity = props.popularity
    ? new Intl.NumberFormat().format(props.popularity.toFixed(0))
    : "N/A";

  const popularityLevel = () => {
    if (props.popularity > 5000)
      return { label: "Very Popular", color: "rgba(76, 175, 80, 0.7)" };
    if (props.popularity > 1000)
      return { label: "Popular", color: "rgba(255, 152, 0, 0.7)" };
    return { label: "Unpopular", color: "rgba(244, 67, 54, 0.7)" };
  };

  const { label, color } = popularityLevel();

  return (
    <Card
      onClick={handleClick}
      style={{ cursor: "pointer", position: "relative" }}
    >
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
        <Typography
          variant="body2"
          style={{
            color: color,
            fontWeight: "normal",
            fontSize: "0.85rem",
            marginTop: "8px",
          }}
        >
          {label} - {formattedPopularity}
        </Typography>
      </CardContent>
      <IconButton
        onClick={toggleFavorite}
        style={{ position: "absolute", top: 10, right: 10, color: "red" }}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Card>
  );
}
