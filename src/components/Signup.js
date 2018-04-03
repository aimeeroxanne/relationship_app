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
  <div className="inner">
    <h1>Create an Account</h1>
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
          floatingLabelText="Name"
          hintText="Enter Name"
        /><br />
        <TextField
          floatingLabelText="Email"
          hintText="Enter Username"
        /><br />
        <TextField
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
        /><br />
        <TextField
          hintText="Verify Password"
          floatingLabelText="Password"
          type="password"
        /><br />
        <RaisedButton label="Create Account" primary={true} style={style} />
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
