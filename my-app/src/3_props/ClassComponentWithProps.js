import React from "react";

class ClassComponentWithProps extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default ClassComponentWithProps;
