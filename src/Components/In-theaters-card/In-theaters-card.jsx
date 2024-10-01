import "./In-theaters-card.css";

export default function InTeathers(props) {
  return (
    <div className="in-theaters-card">
      <img
        className="in-theaters-img"
        src="https://i.pinimg.com/originals/b9/45/18/b94518ceb502e96d9303f67eaaeaaf15.jpg"
      />
      <p className="exibition-date">OCT 4</p>
      <p>Japan</p>
      <p>Spirited Away | Fantasy</p>
    </div>
  );
}
