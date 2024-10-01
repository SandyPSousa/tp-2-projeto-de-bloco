import Button from "../Buttons/Buttons";
import "./Search-bar.css"

export default function SearchBar() {
  return (
    <div className="search-div">
      <input className="search-input" placeholder="Search by Country"></input>
      <Button />
    </div>
  );
}
