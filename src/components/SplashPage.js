import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSync from '@fortawesome/fontawesome-free-solid/faSync'

import RaisedButton from 'material-ui/RaisedButton';

class SplashPage extends Component {
  render() {
    return (
      <div className="splash bg">
        <div className="inner">
          <FontAwesomeIcon icon={faSync} className='fa-10x' />
          <h1> Relationship App </h1>
          <p> An app designed to help you reconnect with your partner. </p>
          <RaisedButton label="Create Account" default={true} />
        </div>
      </div>
    )
  }
}

export default SplashPage
