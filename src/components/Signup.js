import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import * as routes from '../constants/routes'
import { auth } from '../firebase'

const style = {
  margin: 12,
};

const SignUpPage = () =>
  <div className="inner">
    <h1>Create an Account</h1>
    <SignUpForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  displayName: '',
  email: '',
  password: '',
  verifypass: '',
  error: null
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);

  this.state = INITIAL_STATE
  }

  onSubmit = (e) => {
     const {
      displayName,
      email,
      password,
    } = this.state;

    e.preventDefault();
    auth.signUp(email, password)
      .then(authUser => {
console.log(authUser.providerData);
        this.setState(() => ({ ...INITIAL_STATE }));
        // save data to my server
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

  }

  render() {
    const {
      displayName,
      email,
      password,
      verifypass,
      error,
    } = this.state;

    const isInvalid =
      password !== verifypass ||
      password === '' ||
      displayName === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        { error && <p>{error.message}</p> }
        <TextField
          value={displayName}
          onChange={e => this.setState(byPropKey('displayName', e.target.value))}
          floatingLabelText="Name"
          hintText="Enter Name"
        /><br />
        <TextField
          value={email}
          onChange={e => this.setState(byPropKey('email', e.target.value))}
          floatingLabelText="Email"
          hintText="Enter Email"
        /><br />
        <TextField
          value={password}
          onChange={e => this.setState(byPropKey('password', e.target.value))}
          hintText="Enter Password"
          floatingLabelText="Password"
          type="password"
        /><br />
        <TextField
          value={verifypass}
          onChange={e => this.setState(byPropKey('verifypass', e.target.value))}
          hintText="Verify Password"
          floatingLabelText="Password"
          type="password"
        /><br />
        <RaisedButton label="Create Account" primary={true} style={style} disabled={isInvalid} type="submit" />
      </form>
    )


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
