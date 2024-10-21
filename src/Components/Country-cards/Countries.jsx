// import React, { useEffect, useState } from "react";
// import "./Countries.css";
// import { getCountryMovies } from "../../themoviedb";

// const countriesList = [
//   { code: "BR", name: "Brazil" },
//   { code: "US", name: "United States" },
//   { code: "IN", name: "India" },
//   { code: "FR", name: "France" },
//   { code: "JP", name: "Japan" },
// ];

// export default function PopularCountries() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPopularCountries() {
//       const countryData = await Promise.all(
//         countriesList.map(async (country) => {
//           const popularity = await getCountryMovies(country.code);
//           return {
//             name: country.name,
//             popularity: popularity,
//           };
//         })
//       );

//       const sortedCountries = countryData.sort(
//         (a, b) => b.popularity - a.popularity
//       );

//       setCountries(sortedCountries);
//       setLoading(false);
//     }

//     fetchPopularCountries();
//   }, []);

//   return (
//     <section>
//       <div className="popular-countries-section">
//         {loading ? (
//           <p>Loading countries...</p>
//         ) : (
//           countries.map((country, index) => (
//             <div key={index} className="country-card">
//               <p>{country.name}</p>
//               <p>Popularity: {country.popularity.toFixed(2)}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useState } from "react";
// import "./Countries.css";
// import { getCountryMovies } from "../../themoviedb";

// const countriesList = [
//   { code: "BR", name: "Brazil", image: "https://flagcdn.com/w2560/br.png" },
//   { code: "US", name: "United States", image: "https://flagcdn.com/w2560/us.png" },
//   { code: "IN", name: "India", image: "https://flagcdn.com/w2560/in.png" },
//   { code: "FR", name: "France", image: "https://flagcdn.com/w2560/fr.png" },
//   { code: "JP", name: "Japan", image: "https://flagcdn.com/w2560/jp.png" },
// ];

// export default function PopularCountries() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPopularCountries() {
//       const countryData = await Promise.all(
//         countriesList.map(async (country) => {
//           const popularity = await getCountryMovies(country.code);
//           return {
//             name: country.name,
//             image: country.image,  // Incluindo a imagem no retorno
//             popularity: popularity,
//           };
//         })
//       );

//       const sortedCountries = countryData.sort(
//         (a, b) => b.popularity - a.popularity
//       );

//       setCountries(sortedCountries);
//       setLoading(false);
//     }

//     fetchPopularCountries();
//   }, []);

//   return (
//     <section>
//       <div className="popular-countries-section">
//         {loading ? (
//           <p>Loading countries...</p>
//         ) : (
//           countries.map((country, index) => (
//             <div key={index} className="country-card">
//               <img
//                 src={country.image}
//                 alt={`${country.name} flag`}
//                 className="country-image"
//               />
//               <p>{country.name}</p>
//               <p>Popularity: {country.popularity.toFixed(2)}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// }
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Countries.css";
// import { getCountryMovies } from "../../themoviedb";

// const countriesList = [
//   { code: "BR", name: "Brazil", image: "path_to_brazil_image.jpg" },
//   { code: "US", name: "United States", image: "path_to_usa_image.jpg" },
//   { code: "IN", name: "India", image: "path_to_india_image.jpg" },
//   { code: "FR", name: "France", image: "path_to_france_image.jpg" },
//   { code: "JP", name: "Japan", image: "path_to_japan_image.jpg" },
// ];

// export default function PopularCountries() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // Hook para navegação

//   useEffect(() => {
//     async function fetchPopularCountries() {
//       const countryData = await Promise.all(
//         countriesList.map(async (country) => {
//           const popularity = await getCountryMovies(country.code);
//           return {
//             name: country.name,
//             image: country.image,
//             popularity: popularity,
//             code: country.code, // Adicionar o código do país para navegação
//           };
//         })
//       );

//       const sortedCountries = countryData.sort(
//         (a, b) => b.popularity - a.popularity
//       );

//       setCountries(sortedCountries);
//       setLoading(false);
//     }

//     fetchPopularCountries();
//   }, []);

//   // Função para navegar para a lista de filmes do país selecionado
//   const handleCountryClick = (countryCode) => {
//     navigate(`/movies/${countryCode}`);
//   };

//   return (
//     <section>
//       <div className="popular-countries-section">
//         {loading ? (
//           <p>Loading countries...</p>
//         ) : (
//           countries.map((country, index) => (
//             <div
//               key={index}
//               className="country-card"
//               onClick={() => handleCountryClick(country.code)} // Navegar ao clicar
//               style={{ cursor: "pointer" }} // Deixar claro que é clicável
//             >
//               <img
//                 src={country.image}
//                 alt={`${country.name} flag`}
//                 className="country-image"
//               />
//               <p>{country.name}</p>
//               <p>Popularity: {country.popularity.toFixed(2)}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// }









// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Countries.css";
// import { getCountryMovies } from "../../themoviedb";

// const countriesList = [
//   { code: "BR", name: "Brazil", image: "path_to_brazil_image.jpg" },
//   { code: "US", name: "United States", image: "path_to_usa_image.jpg" },
//   { code: "IN", name: "India", image: "path_to_india_image.jpg" },
//   { code: "FR", name: "France", image: "path_to_france_image.jpg" },
//   { code: "JP", name: "Japan", image: "path_to_japan_image.jpg" },
// ];

// export default function PopularCountries() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate(); // Hook para navegação

//   useEffect(() => {
//     async function fetchPopularCountries() {
//       const countryData = await Promise.all(
//         countriesList.map(async (country) => {
//           const popularity = await getCountryMovies(country.code);
//           return {
//             name: country.name,
//             image: country.image,
//             popularity: popularity,
//             code: country.code, // Adicionar o código do país para navegação
//           };
//         })
//       );

//       const sortedCountries = countryData.sort(
//         (a, b) => b.popularity - a.popularity
//       );

//       setCountries(sortedCountries);
//       setLoading(false);
//     }

//     fetchPopularCountries();
//   }, []);

//   // Função para navegar para a lista de filmes do país selecionado
//   const handleCountryClick = (countryCode) => {
//     navigate(`/movies/${countryCode}`);
//   };

//   return (
//     <section>
//       <div className="popular-countries-section">
//         {loading ? (
//           <p>Loading countries...</p>
//         ) : (
//           countries.map((country, index) => (
//             <div
//               key={index}
//               className="country-card"
//               onClick={() => handleCountryClick(country.code)} // Navegar ao clicar
//               style={{ cursor: "pointer" }} // Deixar claro que é clicável
//             >
//               <img
//                 src={country.image}
//                 alt={`${country.name} flag`}
//                 className="country-image"
//               />
//               <p>{country.name}</p>
//               <p>Popularity: {country.popularity.toFixed(2)}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </section>
//   );
// }








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCountryMovies } from "../../themoviedb"; 
import "./Countries.css";

const countriesList = [
  { code: "BR", name: "Brazil", image: "path_to_brazil_image.jpg" },
  { code: "US", name: "United States", image: "path_to_usa_image.jpg" },
  { code: "IN", name: "India", image: "path_to_india_image.jpg" },
  { code: "FR", name: "France", image: "path_to_france_image.jpg" },
  { code: "JP", name: "Japan", image: "path_to_japan_image.jpg" },
];

export default function PopularCountries() {
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
      <div className="popular-countries-section">
        {loading ? (
          <p>Loading countries...</p>
        ) : (
          countries.map((country, index) => (
            <div
              key={index}
              className="country-card"
              onClick={() => handleCountryClick(country.code)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={country.image}
                alt={`${country.name} flag`}
                className="country-image"
              />
              <p>{country.name}</p>
              <p>Popularity: {country.popularity}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
