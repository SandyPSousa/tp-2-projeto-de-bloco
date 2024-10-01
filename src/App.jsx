import "./App.css";
import Country from "./Components/Country-cards/Countries";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import InTeathers from "./Components/In-theaters-card/In-theaters-card";
import PopularMovies from "./Components/Popular-movies-card/Popular-movies-card";
import SearchBar from "./Components/search-bar/search-bar";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div className="search-bar-div">
          <h3 className="discover-h3">Discover Movies from Around the World</h3>
          <SearchBar />
        </div>
        <h3 className="country-section-h3">MOST SEARCHED COUNTRIES</h3>
        <div className="popular-countries-section">
          <Country />
          <Country />
          <Country />
          <Country />
        </div>
        <h3 className="in-theaters-title">IN THEATERS</h3>
        <div className="in-theaters-div">
          <InTeathers />
          <InTeathers />
          <InTeathers />
          <InTeathers />
        </div>
        <h3>POPULAR MOVIES</h3>
        <div className="popular-movies-div">
          <PopularMovies />
          <PopularMovies />
          <PopularMovies />
          <PopularMovies />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
