import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "Banana 🍌 ", color: "yellow", price: 2 },
    { name: "Cherry 🍒 ", color: "red", price: 3 },
    { name: "Strawberry 🍓 ", color: "red", price: 4 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <FruitList fruits={fruits} setFruits={setFruits} />
      </header>
    </div>
  );
}

export default App;
