import React, { useState, useContext } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import "../Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "user" && password === "pass") {
      setUser({ username });
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Form>
          <Form.Input
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Message>{error}</Message>}
          <Button className="green-button" onClick={handleLogin}>
            Login
          </Button>
          <Button as={Link} to="/forgot-password">
            Forgot Password?
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
