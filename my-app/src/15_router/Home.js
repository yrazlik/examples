import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <Menu>
      <Menu.Item as={Link} to="/account">
        My Account
      </Menu.Item>
      <Menu.Item as={Link} to="/cards">
        My Cards
      </Menu.Item>
      <Menu.Item as={Link} to="/settings">
        Settings
      </Menu.Item>
      <Menu.Item as={Link} to="/profile">
        Profile
      </Menu.Item>
    </Menu>
    <h1>Welcome to the Home Page</h1>
  </div>
);

export default Home;
