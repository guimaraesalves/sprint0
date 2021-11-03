import React from "react";
//import GetUserComponent from "./GetUserComponent";




function WelcomePage({user, Login}) {
  


return (
    <div>
      <h1>Welcome Back  {user}!</h1>
        <button className="btn btn-primary" onClick={Login}>
          Logout
        </button>
    </div>
  );
  
 
}
export default WelcomePage;
