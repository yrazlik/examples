import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  getPageDetails = () => {
    for (var i = 0; i < 100000; i++) {}
    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.getPageDetails();
  }

  getContent = () => {
    if (this.state.loading) {
      return <div>LOADING</div>;
    }

    return (
      <div>
        <h1>This is a class component</h1>
        <h2>Subtitle</h2>
      </div>
    );
  };

  render() {
    return <>{this.getContent()}</>;
  }
}

export default ClassComponent;
