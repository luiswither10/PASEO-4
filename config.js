import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí

const firebaseConfig = {
    apiKey: "AIzaSyBNllWAnMu3hpOUUgrzKnPXkI9NHbXRbQc",
    authDomain: "paseo-electronico-4.firebaseapp.com",
    projectId: "paseo-electronico-4",
    storageBucket: "paseo-electronico-4.appspot.com",
    messagingSenderId: "969427835955",
    appId: "1:969427835955:web:4b761f1d1bd0bfbd75d746"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


