function WelcomePage({ user, Logout }) {
  

  return (
    <div>
      <h1>Welcome Back {user}!</h1>
      <button className="btn btn-primary" onClick={Logout}>
        Logout
      </button>
    </div>
  );
}
export default WelcomePage;
