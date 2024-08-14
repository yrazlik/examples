import React from "react";

class NewClassComponent extends React.Component {
  constructor(props) {
    super(props);
    //this.changeName();
    this.state = {
      name: "State",
    };
  }

  changeName = () => {
    //this.props.data.name = "Yasin2";

    //this.state.name = "Yasin";

    this.setState(
      {
        name: "Yasin",
        surname: "Razlık",
      },
      () => {
        alert(this.state.name);
      }
    );
  };

  render() {
    return (
      <button onClick={this.changeName}>
        {this.state.name} {this.state.surname}
      </button>
    );
  }
}

export { NewClassComponent };
