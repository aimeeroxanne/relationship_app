import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 0,
  padding: 3,
  // textAlign: 'center',
}

class LovedUnlovedListSelf extends Component {

  constructor(props){
    super(props)
    let tagline = this.props.loved ? "loved and respected" : "unloved and disrespected"
    this.state = {
      tagline
    }
  }
  render() {
    return (
      <div>
        <h2> Things that make my partner feel {this.state.tagline}</h2>
        {
          this.props.list.map((item, index) => (
            <RaisedButton key={index} label={item} secondary={true} style={style} fullWidth={true}/>
          ))
        }
      </div>
    )}

}

export default LovedUnlovedListSelf
