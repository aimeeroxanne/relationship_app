import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSync from '@fortawesome/fontawesome-free-solid/faSync'
import { Link, Switch } from "react-router-dom";

import RaisedButton from 'material-ui/RaisedButton';

class SplashPage extends Component {
  render() {
    return (
      <div className="splash bg">
        <div className="inner">
          <FontAwesomeIcon icon={faSync} className='fa-10x' />
          <h1> Relationship App </h1>
          <p> An app designed to help you reconnect with your partner. </p>
          <Link to="/signup" ><RaisedButton label="Create Account" default={true} /></Link>
        </div>
      </div>
    )
  }
}

export default SplashPage
