import React, { Component } from 'react'
import { Link, Switch } from "react-router-dom";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
class SendRating extends Component {
  render() {
    return (
      <div className="width center">


        <Card className='center'>

          <CardTitle title="Appreciation" /> {/*
          <CardText> */}
          <span className="large">8</span> {/* </CardText> */}
          <TextField multiLine={true} hintText="Enter comments here to express to your partner how you feel about this item. Is there a way your partner could have improved their score?" />
          <br />

        </Card>
        <p>
          This person feels loved and respected when their partner expresses appreciation for what they’ve done.
        </p>

      </div>

    )}
  }


        export default SendRating
