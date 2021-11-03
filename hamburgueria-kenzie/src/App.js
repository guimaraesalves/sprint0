import React, { useState } from "react";
import "./App.css";
import Header from "./components/MenuContainer/header";
import MenuContainer from "./components/MenuContainer/MenuContainer";
//import Footer from "./components/MenuContainer/footer";

function App() {
  const [input, setInput] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [overall, setOverall] = useState(0);
  const product_card = [
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      currency: "R$",
      thumb: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      currency: "R$",
      thumb: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      currency: "R$",
      thumb: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      currency: "R$",
      thumb: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      currency: "R$",
      thumb: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake",
      category: "Bebidas",
      price: 4.99,
      currency: "R$",
      thumb: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ];

  function showProducts() {
    if (input === "") {
      return product_card.filter((item) => item);
    } else {
      product_card.filter((item) => item.name.includes(input));
    }
  }

  function handleClick(product) {
    if (currentSale.every((item) => item.id !== product_card.id)) {
      return setCurrentSale([...currentSale, product]);
    }
  }

  const tot = currentSale.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header input={input} setInput={setInput} />
        </header>

        <div className="App-main">
          <MenuContainer
            total={tot}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleClick={handleClick}
            showProducts={showProducts}
            cartTotal={overall}
            setOverall={setOverall}
          />
        </div>
      </div>
    </>
  );
}

export default App;
