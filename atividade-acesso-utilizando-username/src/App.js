import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import GetUserComponent from "./components/GetUserComponent/GetUserComponent";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const user = "Mateus";

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <WelcomePage
            user={user}
            setLoggedIn={setLoggedIn}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          <GetUserComponent setUser={user} setLoggedIn={setLoggedIn} />
        )}
      </header>
    </div>
  );
}

export default App;
