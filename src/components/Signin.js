import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './Signup';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const SignInPage = ({ history }) =>
  <div className="inner">
    <h1>Sign In</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.SignIn(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
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
        <RaisedButton label="Sign In" primary={true} style={style} disabled={isInvalid} type="submit" />

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
