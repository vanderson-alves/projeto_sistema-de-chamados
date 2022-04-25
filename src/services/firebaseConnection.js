import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDDtCUyTuYKWWht5YVibfBdTGhw60WBdY8",
    authDomain: "sistema-de-chamados-70dbc.firebaseapp.com",
    projectId: "sistema-de-chamados-70dbc",
    storageBucket: "sistema-de-chamados-70dbc.appspot.com",
    messagingSenderId: "1061241828103",
    appId: "1:1061241828103:web:3865fe5c98ad84bc614ba2",
    measurementId: "G-87C0YBVV44"
  };
  
  if(!firebase.apps.length){
    const app = firebase.default.initializeApp(firebaseConfig);
}

export default firebase