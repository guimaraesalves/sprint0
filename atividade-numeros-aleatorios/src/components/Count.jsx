import React, { useState } from "react";
import "./Count.css";

function Count(props) {
  const [number, setNumber] = useState("Clique para Sortear um Número");

  function randoNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }
  return (
    <div>
      <p className="num">{number}</p>
      <button className="btn" onClick={randoNumber}>
    Sortear um número
      </button>
    </div>
  );
}

export default Count;
