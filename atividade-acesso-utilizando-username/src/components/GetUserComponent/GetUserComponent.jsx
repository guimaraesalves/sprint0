import React, { useState } from "react";

function GetUserComponent({ Login }) {
  const [userInput, setUserInput] = useState("");

  console.log(userInput);

  return (
    <div>
      <h1>Logged out. Please sign up.</h1>
      <form>
        <input
          placeholder="User"
          className="form-control"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />

        <button className="btn btn-primary" onClick={() => Login(userInput)}>
          Login
        </button>
      </form>
    </div>
  );
}

export default GetUserComponent;
