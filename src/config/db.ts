import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDXmld1jgFCu4wBLpGjgN2FfGdxHp6GuPk",
    authDomain: "goauditfb.firebaseapp.com",
    databaseURL: "https://goauditfb-default-rtdb.firebaseio.com",
    projectId: "goauditfb",
    storageBucket: "goauditfb.appspot.com",
    messagingSenderId: "588762669826",
    appId: "1:588762669826:web:b7c180927ad9033c2b181b",
    measurementId: "G-X8F19XV4PS"
  };
  // Initialize Firebase
  const db = firebase.initializeApp(firebaseConfig);

export default db;