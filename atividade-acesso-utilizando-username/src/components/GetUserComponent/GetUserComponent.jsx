import React, { useState } from "react";
//import WelcomePage from "./WelcomePage";

function GetUserComponent({ Logout, setUser }) {
  const [userInput, setUserInput] = useState("");

  console.log(userInput);

  return (
    <div>
      <h1>Please sign up. deslogado</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setUser(userInput);
        }}
      >
        <div className="col-md-3">
          <input
            placeholder="Nome"
            className="form-control"
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          ></input>
        </div>

        <button className="btn btn-primary" onClick={Logout} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default GetUserComponent;
