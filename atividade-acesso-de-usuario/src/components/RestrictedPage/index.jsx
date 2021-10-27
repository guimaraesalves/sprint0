import React from "react";
import "./index.css";

function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <div>Bem Vindo, {user} !</div>
          <button className="button" onClick={Logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div>Você não está Logado!</div>
          <button className="button" onClick={Login}>
            Login
          </button>
        </>
      )}
    </>
  );
}

export default RestrictedPage;
