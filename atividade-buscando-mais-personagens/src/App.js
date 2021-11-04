import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${next}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacterList(response.results);
      })
      .catch((err) => console.log(err));
  }, [next]);
  console.log(characterList);

  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };

  function nextPage() {
    setNext(next + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meus personagens</h1>
        <p>Página {next}</p>
        
        <span>
          {next === 42 ? (
            <>
              <button className="w3-btn" onClick={previousPage}>
                Anterior
              </button>
              <></>
            </>
          ) : (
            <>
              <button className="w3-btn" onClick={previousPage}>
                Anterior
              </button>
              <button className="w3-btn" onClick={nextPage}>
                Próxima
              </button>
            </>
          )}
        </span>
        <Characters characters={characterList} />
      </header>
    </div>
  );
}

export default App;
