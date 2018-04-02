import { auth } from './firebase'

const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

const signOut = () =>
  auth.signOut();

const resetPassword = (email) =>
  auth.sendPasswordResetEmail(email)

const updatePassword = (password) =>
  auth.currentUser.updatePassword(password)

export {
  signUp,
  signIn,
  signOut,
  resetPassword,
  updatePassword
}
