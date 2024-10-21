// export async function getTrendingMovies() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=7fe328d8cb04d60292d16978c04c37b0",
//       {
//         method: "GET",
//       }
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getLanguages() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/configuration/languages?language=en-US&api_key=7fe328d8cb04d60292d16978c04c37b0",
//       {
//         method: "GET",
//       }
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getInTheatersMovies() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=7fe328d8cb04d60292d16978c04c37b0",
//       {
//         method: "GET",
//       }
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     throw error;
//   }
// }

// // export async function getCountryFilter() {
// //   try {
// //     const response = await fetch(
// //       "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=BR&api_key=7fe328d8cb04d60292d16978c04c37b0",
// //       {
// //         method: "GET",
// //       }
// //     );
// //     const responseJson = await response.json();
// //     return responseJson;
// //   } catch (error) {
// //     throw error;
// //   }
// // }

// export async function getCountryMovies(countryCode) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=${countryCode}&api_key=7fe328d8cb04d60292d16978c04c37b0`,
//       {
//         method: "GET",
//       }
//     );
//     const responseJson = await response.json();

//     const totalPopularity = responseJson.results.reduce((acc, movie) => {
//       return acc + movie.popularity;
//     }, 0);

//     return totalPopularity;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getPopularMoviesByCountry(countryCode) {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=7fe328d8cb04d60292d16978c04c37b0&region=${countryCode}`
//   );
//   const data = await response.json();
//   return data.results;
// }


// export async function getTrendingMovies() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=7fe328d8cb04d60292d16978c04c37b0"
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//     throw error;
//   }
// }

// export async function getLanguages() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/configuration/languages?api_key=7fe328d8cb04d60292d16978c04c37b0"
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error("Error fetching languages:", error);
//     throw error;
//   }
// }

// export async function getInTheatersMovies() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US&page=1"
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error("Error fetching movies in theaters:", error);
//     throw error;
//   }
// }

// export async function getPopularMoviesByCountry(countryCode) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US&region=${countryCode}`
//     );
//     const responseJson = await response.json();
//     return responseJson.results;
//   } catch (error) {
//     console.error(`Error fetching movies for country ${countryCode}:`, error);
//     throw error;
//   }
// }


// export async function getTrendingMovies() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=7fe328d8cb04d60292d16978c04c37b0"
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//     throw error;
//   }
// }

// export async function getLanguages() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/configuration/languages?api_key=7fe328d8cb04d60292d16978c04c37b0"
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error("Error fetching languages:", error);
//     throw error;
//   }
// }

// export async function getInTheatersMovies() {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US&page=1"
//     );
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error("Error fetching movies in theaters:", error);
//     throw error;
//   }
// }

// // Adicione aqui a função getCountryMovies
// export async function getCountryMovies(countryCode) {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US&region=${countryCode}`
//     );
//     const responseJson = await response.json();
//     return responseJson.results;
//   } catch (error) {
//     console.error(`Error fetching movies for country ${countryCode}:`, error);
//     throw error;
//   }
// }


export async function getTrendingMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=7fe328d8cb04d60292d16978c04c37b0"
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
}

export async function getLanguages() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/configuration/languages?api_key=7fe328d8cb04d60292d16978c04c37b0"
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
}

export async function getInTheatersMovies() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US&page=1"
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("Error fetching movies in theaters:", error);
    throw error;
  }
}

export async function getCountryMovies(countryCode) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US&region=${countryCode}`
    );
    const responseJson = await response.json();
    return responseJson.results;
  } catch (error) {
    console.error(`Error fetching movies for country ${countryCode}:`, error);
    throw error;
  }
}

// Certifique-se de que a função getPopularMoviesByCountry está aqui
export async function getPopularMoviesByCountry(countryCode) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7fe328d8cb04d60292d16978c04c37b0&with_origin_country=${countryCode}`
    );
    const responseJson = await response.json();
    return responseJson.results;
  } catch (error) {
    console.error(`Error fetching popular movies by country ${countryCode}:`, error);
    throw error;
  }
}
