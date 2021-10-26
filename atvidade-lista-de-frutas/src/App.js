import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitNames = fruits.map((item) => {
    return <li>{item.name}</li>;
  });

  const filterRedFruits = fruits.filter((item) => {
    return item.color === "red";
  });

  const totalPrice = fruits.reduce((vlrAnterior, vlrAtual) => {
    return vlrAtual.price + vlrAnterior;
  }, 0);

  function addFruit() {
    setFruits(filterRedFruits);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fruits</h1>
        <p>Preço Total = R$ {totalPrice}</p>
        <div>
          <ul>
            <li>{fruitNames}</li>
          </ul>
        </div>
        <button className="btn" onClick={addFruit}>
          show red fruits
        </button>
      </header>
    </div>
  );
}

export default App;
