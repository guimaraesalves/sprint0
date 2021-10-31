import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage.jsx"
import GetUserComponent from "./components/GetUserComponent/GetUserComponent.jsx"

import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("")

  
  

     
  function Login(isLoggedIn) {
    setIsLoggedIn(!isLoggedIn);
  }

  function Logout(isLoggedIn) {
    setIsLoggedIn(isLoggedIn);
  }

  return (
    <header className="App-header">
      <div className="container mt-5">
        {isLoggedIn ? (
          <GetUserComponent
            isLoggedIn={isLoggedIn}
            Login={Login}  
            setUser= {user}          
          />
        ) : (
          <WelcomePage isLoggedIn={isLoggedIn} Logout={Logout} user={setUser} />
          
        )}
      </div>
    </header>
  );
}

export default App;