import "./CharCard.css";

function CharCard({ char }) {
  return (
    
      
    <div key={char.id} className={`card ${char.status}`}>
      <div className="card-title">{char.name}</div>
      <img className="card-body" src={char.image} alt={char.name}></img>
      <label className="status">{char.status}</label>
    </div>
    
  );
}

export default CharCard;
