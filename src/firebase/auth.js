import { auth } from './firebase'
import { url } from '../constants/env'

const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

const signOut = () => {
  auth.signOut()
}
const resetPassword = (email) =>
  auth.sendPasswordResetEmail(email)

const updatePassword = (password) =>
  auth.currentUser.updatePassword(password)

// TODO if error on deletion, then reauthenticate and delete, need new story for this
const reAuthenticateUser = (credential) => {
  var user = auth().currentUser

  user.reauthenticateWithCredential(credential).then(function() {
    deleteUser()
  }).catch( error => {
    error => console.error('Error:', error)
  })
}


const deleteUser = (userEmail) => {
  var user = auth().currentUser

  user.delete().then(function() {
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(userEmail),
      headers: new Headers({
      'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
  }).catch(function(error) {
    // An error happened.
  })

}

export {
  signUp,
  signIn,
  signOut,
  resetPassword,
  updatePassword,
  deleteUser,
}
