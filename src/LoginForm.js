import { Component } from "react";
import Login from './Login';
import { withAuth0 } from "@auth0/auth0-react";

class LoginForm extends Component {

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Login />
    );
  }
};

export default withAuth0(LoginForm);
