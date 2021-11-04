import "./CharCard.css";

function CharCard({ char }) {
  return (
    <div className="card">
      <label>{char.name}</label>
      <img className="picture" src={char.image} alt={char.name}></img>
    </div>
  );
}

export default CharCard;