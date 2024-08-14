import React from "react";

class Render extends React.Component {
  render() {
    return (
      <>
        <div style={{ color: "blue", "font-size": "40px" }}>
          Hello from React {calculate(10, 20) + x}{" "}
        </div>
        <div>Hello again</div>
      </>
    );
  }
}

var x = 100;

function calculate(x, y) {
  return x * y;
}

export default Render;
