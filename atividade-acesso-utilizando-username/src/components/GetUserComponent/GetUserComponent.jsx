import React from "react";
import { useState } from "react";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");
  function HandleLogin() {
    return setUser(userInput);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </form>
    </div>
  );
}

export default GetUserComponent;
