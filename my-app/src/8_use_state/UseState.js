import { useState } from "react";

var UseState = () => {
  const [name, setName] = useState("name");

  const changeName = () => {
    setName("Yasin");
  };

  return <button onClick={changeName}>{name}</button>;
};

export default UseState;
