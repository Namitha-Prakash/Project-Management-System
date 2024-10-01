import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuImTEfi4zJcQTHA7GQx4NZ-SXTzPebQI",
  authDomain: "projectmanagement-c7562.firebaseapp.com",
  databaseURL: "https://projectmanagement-c7562-default-rtdb.firebaseio.com",
  projectId: "projectmanagement-c7562",
  storageBucket: "projectmanagement-c7562.appspot.com",
  messagingSenderId: "704078831702",
  appId: "1:704078831702:web:ba2303ad6256f86c579bf7",
  measurementId: "G-S13TW6SSCF"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }