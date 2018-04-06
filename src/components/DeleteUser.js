import React from 'react'
import { auth } from '../firebase'

class DeleteUser extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.deleteUser(email)
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
    return (
      <button
        type="button"
        onClick={auth.delete}
      >
        Delete Account
      </button>
        { error && <p>{error.message}</p> }
    );
  }
}

export default DeleteUserButton
