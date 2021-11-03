import React from "react";
import "./header.css"

function Header({ input, setInput }) {
  return (
    <nav>
      <div className="filtro">
        <div className="logo">
          <h1 className="logo1">Burguer</h1>
          <h2 className="logo2">Kenzie</h2>
          <div className="search">
            <div className="search-input">
              <i className="fa fa-search"></i>
              <input
                className="input"
                placeholder=""
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="filtro">Limpar</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
