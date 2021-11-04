import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => {
        setCharacterList(response.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meus personagens</h1>
        <Characters characters={characterList} />
      </header>
    </div>
  );
}

export default App;
