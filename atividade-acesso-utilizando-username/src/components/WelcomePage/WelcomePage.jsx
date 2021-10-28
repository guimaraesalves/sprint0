import React from "react";

function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    return setIsLoggedIn;
  }
  return (
    <div>
      <h2>Olá Mundo! E aí {user} ?</h2>
      <button onClick={() => HandleLogout()}>Sair</button>
    </div>
  );
}

export default WelcomePage;
