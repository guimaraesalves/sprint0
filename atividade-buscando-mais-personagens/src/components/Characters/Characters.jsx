import CharCard from "../CharCard/CharCard";
import "./Characters.css";

function characters({ characters }) {
  return (
    <div className="container">
      {characters.map((char) => (
        <CharCard char={char} />
      ))}
    </div>
  );
}

export default characters;
