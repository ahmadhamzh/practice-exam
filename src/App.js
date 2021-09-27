import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Myfav from './Myfav'
import LoginForm from './LoginForm'
import BestBooks from './BestBooks';
import Profile from './Profile'
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
require('dotenv').config();


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    const isAuth = this.props.auth0.isAuthenticated
    return (
      <>
        <Router>
          {isAuth && 
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          }
          <Switch>
            <Route exact path="/">
              {
                isAuth ? 
                <BestBooks /> : <LoginForm />
              }
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/myfav">
              <Myfav />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
