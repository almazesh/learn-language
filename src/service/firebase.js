import firebase  from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBfZ2ZOpeNKT0kIM0p-5o0rM8_OcnjvnPs",
    authDomain: "database-cc3d2.firebaseapp.com",
    databaseURL: "https://database-cc3d2-default-rtdb.firebaseio.com",
    projectId: "database-cc3d2",
    storageBucket: "database-cc3d2.appspot.com",
    messagingSenderId: "114401351916",
    appId: "1:114401351916:web:6d6f346fb05b872a35edc9"
  };


  export const fire = firebase;
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  firebase.initializeApp(firebaseConfig)