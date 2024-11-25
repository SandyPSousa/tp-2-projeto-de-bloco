import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCountryMovies } from "../../themoviedb";
import {
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

const countriesList = [
  {
    code: "BR",
    name: "Brazil",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png",
  },
  {
    code: "US",
    name: "United States",
    image:
      "https://s3.static.brasilescola.uol.com.br/be/conteudo/images/estados-unidos.jpg",
  },
  {
    code: "IN",
    name: "India",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
  },
  {
    code: "FR",
    name: "France",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
  },
  {
    code: "JP",
    name: "Japan",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  },
];

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPopularCountries() {
      const countryData = await Promise.all(
        countriesList.map(async (country) => {
          const popularity = await getCountryMovies(country.code);
          return {
            name: country.name,
            image: country.image,
            popularity: popularity.length,
            code: country.code,
          };
        })
      );

      const sortedCountries = countryData.sort(
        (a, b) => b.popularity - a.popularity
      );

      setCountries(sortedCountries);
      setLoading(false);
    }

    fetchPopularCountries();
  }, []);

  const handleCountryClick = (countryCode) => {
    navigate(`/movies/${countryCode}`);
  };

  return (
    <section>
      <Grid2 container spacing={2} justifyContent="center">
        {loading ? (
          <CircularProgress />
        ) : (
          countries.map((country, index) => (
            <Grid2 item="true" xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => handleCountryClick(country.code)}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={country.image}
                  alt={`${country.name} flag`}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {country.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Popularidade: {country.popularity}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))
        )}
      </Grid2>
    </section>
  );
}
