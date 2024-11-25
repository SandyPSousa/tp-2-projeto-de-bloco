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

export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US`
    );
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(`Error fetching movie details for ID ${movieId}:`, error);
    throw error;
  }
}

export async function getPopularMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7fe328d8cb04d60292d16978c04c37b0&language=en-US&page=1`
    );
    const responseJson = await response.json();
    return responseJson.results; 
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
}

