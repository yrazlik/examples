import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import "../Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleSendEmail = () => {
    setMessage("A confirmation email has been sent to your email address.");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Form>
          <Form.Input
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button primary onClick={handleSendEmail}>
            Send Confirmation Email
          </Button>
          {message && <Message positive>{message}</Message>}
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
