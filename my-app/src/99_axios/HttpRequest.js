// MessageComponent.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchMessage } from "./requests";

const HttpRequest = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSuccessResponse = (response) => {
    setMessage(response.data.message);
  };

  const onFailResponse = (response) => {
    setError("Error fetching message");
    console.error(error);
  };

  useEffect(() => {
    fetchMessage(onSuccessResponse, onFailResponse);
  }, []);

  return <div>{error ? <p>{error}</p> : <p>{message}</p>}</div>;
};

export default HttpRequest;
