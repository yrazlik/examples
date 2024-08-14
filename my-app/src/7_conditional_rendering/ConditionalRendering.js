const UserGreeting = ({ userName }) => {
  return <h2>Welcome back, {userName}!</h2>;
};

const GuestGreeting = () => {
  return <h2>Please sign up or log in.</h2>;
};

let ConditionalRendering = ({ isLoggedIn, userName }) => {
  if (isLoggedIn) {
    return <UserGreeting userName={userName} />;
  }

  return <GuestGreeting />;
  /*
  return (
    <div>
      {isLoggedIn ? <UserGreeting userName={userName} /> : <GuestGreeting />}
    </div>
  );
  */
};

export default ConditionalRendering;
