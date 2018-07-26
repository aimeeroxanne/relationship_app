import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCEXyQeAnLm1I11QB2-pVF7_LsYE5JMNLE",
  authDomain: "relationship-app-5f6d8.firebaseapp.com",
  // databaseURL: "https://relationship-app-5f6d8.firebaseio.com",
  projectId: "relationship-app-5f6d8",
  // storageBucket: "",
  messagingSenderId: "333241337033"
}

if(!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
  auth
}
