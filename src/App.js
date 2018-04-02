import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SignUpPage from './components/Signup'

import {grey100, grey300, grey400, grey500,
white, darkBlack, fullBlack} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

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
        <SignUpPage />
      </MuiThemeProvider>
    )
  }
}

export default App
