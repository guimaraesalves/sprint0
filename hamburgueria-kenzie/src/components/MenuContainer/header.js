import React from "react";
import "./header.css";

function Header({ input, setInput }) {
  return (
    <div className="filter-position">
      <div className="title">
        <h1>Burguer</h1>
        <h2>Kenzie</h2>
      </div>
      <div className="input-box">
        <div className="input-header">
          <input
            type="text"
            placeholder="Buscar"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="filter-button">Filtrar</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
//onClick={() => select(input)
