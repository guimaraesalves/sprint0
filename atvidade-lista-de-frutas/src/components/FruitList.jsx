import React from "react";

function FruitList(props) {
  const fruitNames = props.fruits.map((item) => {
    return (
      <li>
        {item.name} - R$ {item.price}
      </li>
    );
  });

  const totalPrice = props.fruits.reduce((vlrAnterior, vlrAtual) => {
    return vlrAtual.price + vlrAnterior;
  }, 0);

  function SelectFruit() {
    const filterRedFruits = props.fruits.filter((item) => {
      return item.color === "red";
    });
    props.setFruits(filterRedFruits);
  }
  return (
    <div>
      <h1>Fruits</h1>
      <p>Preço Total = R$ {totalPrice}</p>
      <div>
        <ul>
          <li>{fruitNames}</li>
        </ul>
      </div>
      <button className="btn" onClick={SelectFruit}>
        show red fruits
      </button>
    </div>
  );
}

export default FruitList;
