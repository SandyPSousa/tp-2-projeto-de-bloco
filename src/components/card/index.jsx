import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MovieCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/details/${props.id}`);
  };

  return (
    <Card onClick={handleClick} style={{ cursor: "pointer" }}>
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
