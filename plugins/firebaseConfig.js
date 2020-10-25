import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBQTP-66B8rgRxN2zZg1YvaVn3SdW8SUH8',
    authDomain: 'datatabal-12d86.firebaseapp.com',
    databaseURL: 'https://datatabal-12d86.firebaseio.com',
    projectId: 'datatabal-12d86',
    storageBucket: 'datatabal-12d86.appspot.com',
    messagingSenderId: '370809145003',
    appId: '1:370809145003:web:de6d4c017eb63f770519ee',
    measurementId: 'G-CLJ7WF6BXE'
  }

  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
