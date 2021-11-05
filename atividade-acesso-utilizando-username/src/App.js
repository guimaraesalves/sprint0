import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx";
import GetUserComponent from "./components/GetUserComponent/GetUserComponent.jsx";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  function Login(name) {
    setUser(name);
    setIsLoggedIn(true);
  };

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <header className="App-header">
      <div className="container mt-5">
        {isLoggedIn ? (
          <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} Logout={Logout} />
        ) : (
          <GetUserComponent setIsLoggedIn={setIsLoggedIn} setUser={setUser} Login={Login} />
        )}
      </div>
    </header>
  );
}

export default App;
