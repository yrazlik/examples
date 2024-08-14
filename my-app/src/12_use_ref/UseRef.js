import React, { useRef } from "react";

function FocusInput() {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInput = () => {
    // Once the input element is rendered and attached to the DOM, inputRef.current points to the actual DOM node of the input.
    // You can use it to interact with the DOM directly, such as calling focus() to set the input field’s focus.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef} // Attach the ref to the input element
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

function TextboxText() {
  const inputRef = useRef(null);

  const showAlert = () => {
    if (inputRef.current) {
      let currentText = inputRef.current.value;
      alert(currentText);
    }
  };

  const clear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type a text" />
      <button onClick={showAlert}>Show Text Alert</button>
      <button onClick={clear}>Clear Text</button>
    </div>
  );
}

export { FocusInput, TextboxText };
