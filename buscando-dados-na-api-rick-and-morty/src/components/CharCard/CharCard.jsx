import "./CharCard.css";

function CharCard({ char }) {
  return (
    <div key={char.id} className={`card ${char.status}`}>
      <label>{char.name}</label>
      <img className="picture" src={char.image} alt={char.name}></img>
    </div>
  );
}

export default CharCard;
