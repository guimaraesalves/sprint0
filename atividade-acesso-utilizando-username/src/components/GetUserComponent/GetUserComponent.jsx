import React, { useState } from "react";
//import WelcomePage from "./WelcomePage";




function GetUserComponent({ Login, setUser }) {
  const [userInput, setUserInput] = useState(""); 

 
  
  

  return (
    
    <div>
    
      <h1>Please sign up. deslogado</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUserInput(userInput);
          
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

        <button 
          className="btn btn-primary" 
          onClick={Login} 
          type="submit" >
          Login
        </button>
        
      </form>
        
        
        
        
        
    </div>
  );
}

export default GetUserComponent;
