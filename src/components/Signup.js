import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import * as routes from '../constants/routes'

const style = {
  margin: 12,
};

const SignUpPage = () =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>

class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (event) => {

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          floatingLabelText="Username"
          hintText="Enter Username"
        /><br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
        /><br />
        <RaisedButton label="Sign Up" primary={true} style={style} />
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default SignUpPage;

export {
  SignUpForm,
  SignUpLink,
};
