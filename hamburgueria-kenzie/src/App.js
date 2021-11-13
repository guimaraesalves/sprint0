import React, { useState } from "react";
import "./App.css";
import Header from "./components/MenuContainer/header";
import MenuContainer from "./components/MenuContainer/MenuContainer";
//import Footer from "./components/MenuContainer/footer";

function App() {
  const [input, setInput] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [total, setTotal] = useState(0);
  const [filterProduct, setFilterProduct] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milk-Shake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const showProducts = () => {
    return input === filterProduct
      ? filterProduct.filter((item) => item)
      : filterProduct.filter((item) =>
          item.name
            .toLowerCase()
            .split()
            .map((item) => item)
            .join()
            .includes(
              input
                .toLowerCase()
                .split()
                .map((item) => item)
                .join()
            )
        );
  };

  const handleClick = (product) => {
    currentSale.every((item) => item.id !== filterProduct.id -1) &&
      setCurrentSale([...currentSale,  product]);
  };

  const tot = currentSale.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header setInput={setInput} input={input} />
        </header>

        <div className="App-main">
          <MenuContainer
            total={tot}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleClick={handleClick}
            showProducts={showProducts}
            cartTotal={total}
            setTotal={setTotal}
          />
        </div>
      </div>
    </>
  );
}

export default App;
