function HelloWorld() {
  return <div>Hello World</div>;
}

function HelloWorldWithProps(props) {
  return <div>{props.message}</div>;
}

const HelloWorldArrow = () => <div>HelloWorldArrow</div>;

const HelloWorldArrowWithBody = () => {
  var x = 5;
  return <div>{x}</div>;
};

const HelloWorldArrowWithProps = (props) => <div>{props.message}</div>;

const HelloWorldArrowWithJsonProps = (props) => <div>{props.data.name}</div>;

const DifferentPropsExample = ({ name, surname }) => {
  return (
    <div>
      {name} {surname}
    </div>
  );
};

const ButtonWithText = ({ name, onButtonClicked }) => {
  return (
    <div>
      <label>{name}</label> <button onClick={onButtonClicked}>Click</button>{" "}
    </div>
  );
};

export {
  HelloWorld,
  HelloWorldWithProps,
  HelloWorldArrow,
  HelloWorldArrowWithBody,
  HelloWorldArrowWithProps,
  HelloWorldArrowWithJsonProps,
  DifferentPropsExample,
  ButtonWithText,
};
