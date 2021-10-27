import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const user = "Mateus Alves";

  function Login(isLoggedIn) {
    setIsLoggedIn(isLoggedIn);
  }

  function Logout(isLoggedIn) {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        ></RestrictedPage>
      </header>
    </div>
  );
}

export default App;
