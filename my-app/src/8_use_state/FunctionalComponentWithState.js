import { useState } from "react";

const FunctionalComponentWithState = () => {
  const [name, setName] = useState("Default");
  const [surname, setSurname] = useState("Surname");

  const onButtonClicked = () => {
    setName("Yasin");
    setSurname("New Surname");
  };

  return (
    <button onClick={onButtonClicked}>
      {name} {surname}
    </button>
  );
};

export default FunctionalComponentWithState;
