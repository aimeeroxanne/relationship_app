import React, { Component } from 'react'
import * as routes from '../constants/routes'

import { auth } from '../firebase'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
})

const INITIAL_STATE = {
  error: null,
}

class DeleteUser extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state

    const {
      history,
    } = this.props
  console.log("confirm delete");
    auth.deleteUser(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
        history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })

    event.preventDefault()
  }

  render() {
    const {
      error,
    } = this.state
    return (
        //TODO select the appropriate action when a certain button is pressed. Oops, should redirect to last page. Yes should delete and redirect to a confirmation page.
      <div className="inner">
        { error && <p>{error.message}</p> }
        <form onSubmit={this.onSubmit}>
          <Card>
            <CardText >
              Your account will be deleted but your partner’s account will remain intact. Are you sure you want to delete? This cannot be undone.
            </CardText>
            <CardActions>
              <FlatButton label="Oops, that was a mistake" type="submit" />
              <FlatButton label="Yes, delete it" type="submit" />
            </CardActions>
          </Card>

        </form>

      </div>
    )
  }
}

export default DeleteUser
