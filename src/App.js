import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SplashPage from './components/SplashPage'

import {grey100, grey300, grey400, grey500,
white, darkBlack, fullBlack} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUpPage from './components/Signup';
import SignInPage from './components/Signin';

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
  render() {
    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/signin" component={SignInPage} />

          </Switch>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
