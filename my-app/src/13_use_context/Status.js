import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Status() {
  const { isLoggedIn, logout } = useContext(UserContext);

  return (
    <div>
      <h2>Status</h2>
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Status;
