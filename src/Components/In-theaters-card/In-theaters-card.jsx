import "./In-theaters-card.css";

export default function InTeathers(props) {
  return (
    <div className="in-theaters-card">
       <img className="in-theaters-img" src={`https://image.tmdb.org/t/p/original${props.img}`}/>
      <p className="exibition-date">{props?.release_date || "Date"}</p>
      <p>{props?.title || "Nome filme"}</p>
    </div>
  );
}
