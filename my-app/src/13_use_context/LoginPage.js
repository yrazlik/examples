import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function LoginPage() {
  const { isLoggedIn, login } = useContext(UserContext);

  return (
    <div>
      <h2>Login Page</h2>
      {isLoggedIn ? (
        <p>You are already logged in!</p>
      ) : (
        <button onClick={login}>Log In</button>
      )}
    </div>
  );
}

export default LoginPage;
