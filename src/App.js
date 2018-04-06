import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as routes from './constants/routes'
import { firebase } from './firebase'

import {grey100, grey300, grey400, grey500,
white, darkBlack, fullBlack} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import SignUpPage from './components/Signup'
import SignInPage from './components/Signin'
import Navigation from './components/./Navigation'
import SplashPage from './components/./SplashPage'
// import PasswordForgetPage from './components/PasswordForget'
// import HomePage from './Home'
// import AccountPage from './components/Account'

import {fade} from 'material-ui/utils/colorManipulator'

const muiTheme = getMuiTheme({
  fontFamily: 'Quattrocento, serif',
  palette: {
    primary1Color: '#941B0C',
    primary2Color: '#F6AA1C',
    primary3Color: grey400,
    accent1Color: '#BC3908',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: '#220901',
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade('#220901', 0.3),
    pickerHeaderColor: '#941B0C',
    clockCircleColor: fade('#220901', 0.07),
    shadowColor: fullBlack,
  },
})

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    })
  }

  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />

            <hr/>

            <Route
              exact path={routes.SPLASH}
              component={() => <SplashPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            {/* <Route
              exact path={routes.PASSWORD_FORGET}
              component={() => <PasswordForgetPage />}
            /> */}
            {/* <Route
              exact path={routes.HOME}
              component={() => <HomePage />}
              />
              <Route
              exact path={routes.ACCOUNT}
              component={() => <AccountPage />}
            /> */}
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
