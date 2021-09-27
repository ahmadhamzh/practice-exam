import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton"
// import './header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
        <NavItem><Link to="/myfav" className="nav-link">myfav</Link></NavItem>
        <NavItem><LogoutButton /></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}

export default Header;
