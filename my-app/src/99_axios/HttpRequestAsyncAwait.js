// MessageComponent.js

import React, { useEffect, useState } from "react";

import { fetchMessageAsyncAwait, postMessageAsyncAwait } from "./requests";

const HttpRequestAsyncAwait = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessage = () => {
      try {
        const response = fetchMessageAsyncAwait();
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching the message:", error);
        setError("Error fetching message");
      }
    };

    const sendPostRequest = async () => {
      try {
        const response = await postMessageAsyncAwait("Hello post request");
        console.log("POST response:", response.data);
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error posting message:", error);
        setError("Error posting message");
      }
    };

    //fetchMessage();
    sendPostRequest();
  }, []);

  return <div>{error ? <p>{error}</p> : <p>{message}</p>}</div>;
};

export default HttpRequestAsyncAwait;
