import React from "react";

class ClassComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 1,
    };
  }

  generateRandomNumber = () => {
    let newNumber = Math.floor(Math.random() * 100) + 1;

    //do not do this!
    //this.state.randomNumber = newNumber

    //do this
    this.setState({
      randomNumber: newNumber,
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.randomNumber}</h3>
        <button onClick={this.generateRandomNumber}>Generate New Number</button>
      </div>
    );
  }
}

export default ClassComponentWithState;
