import React from "react";

class CounterWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default CounterWithState;
