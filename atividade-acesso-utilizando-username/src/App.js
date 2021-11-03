import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx";
import GetUserComponent from "./components/GetUserComponent/GetUserComponent.jsx";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  function Login(isLoggedIn) {
    setIsLoggedIn(!isLoggedIn);
    setUser("");
  }

  function Logout(isLoggedIn) {
    setIsLoggedIn(isLoggedIn);
    setUser(user);
  }

  return (
    <header className="App-header">
      <div className="container mt-5">
        {!isLoggedIn ? (
          <GetUserComponent
          isLoggedIn={setIsLoggedIn}
          Logout={Logout}
          setUser={setUser}
        />
          
        ) : (
          <WelcomePage isLoggedIn={setIsLoggedIn} Login={Login} user={user} />
          
        )}
      </div>
    </header>
  );
}

export default App;
