import React, { useState, useEffect } from "react";

const SessionTokenManager = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    if (sessionToken) {
      setToken(sessionToken);
    }
  }, []);

  const handleLogin = () => {
    const newToken = "abc123";
    setToken(newToken);
    sessionStorage.setItem("token", newToken);
  };

  const handleLogout = () => {
    setToken("");
    sessionStorage.removeItem("token");
  };

  return (
    <div>
      <h1>{token ? `Session Token: ${token}` : "No session token"}</h1>
      {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default SessionTokenManager;
