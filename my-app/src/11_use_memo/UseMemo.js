import React, { useMemo, useState } from "react";

function ArrayLengthWithoutUseMemo() {
  const [count, setCount] = useState(0);

  // Array with a fixed number of elements
  const array = new Array(1e6).fill(0);

  // Function to calculate the length of the array
  const getArrayLength = () => {
    console.log("Calculating array length...");
    return array.length;
  };

  return (
    <div>
      <p>Array Length: {getArrayLength()}</p> {/* Calling the function */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

function ArrayLengthWithUseMemo() {
  const [count, setCount] = useState(0);

  // Array with a fixed number of elements
  const array = new Array(1e6).fill(0);

  // Memoize the calculation of array length
  const arrayLength = useMemo(() => {
    console.log("Calculating array length with useMemo...");
    return array.length;
  }, [array.length]);

  return (
    <div>
      <p>Array Length: {arrayLength}</p> {/* Using the memoized value */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export { ArrayLengthWithoutUseMemo, ArrayLengthWithUseMemo };
