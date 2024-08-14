function FunctionalComponent() {
  return <div>This is a functional component</div>;
}

function FunctionalComponentWithProps(props) {
  return (
    <h1>
      Hello {props.name} {props.age}
    </h1>
  );
}

var ArrowFunctionComponentWithProps = (props) => {
  return <h1>Message is: {props.message}</h1>;
};

export {
  FunctionalComponent,
  FunctionalComponentWithProps,
  ArrowFunctionComponentWithProps,
};
