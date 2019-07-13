import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCe4isYhHdrAJvhYjJrcOeEuUINHzqWlQg",
    authDomain: "kreators-login.firebaseapp.com",
    databaseURL: "https://kreators-login.firebaseio.com",
    projectId: "kreators-login",
    // storageBucket: "",
    messagingSenderId: "995068365078",
    appId: "1:995068365078:web:ede86797ee3b772c"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  //firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;