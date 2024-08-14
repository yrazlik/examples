import { useState, useCallback, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    increment();
  }, [increment]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Counter;
