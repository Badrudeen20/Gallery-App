import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAhujbDFOLn_hmKrk_x4ZibJkLfKNzxu3w",
    authDomain: "mygallary-535f8.firebaseapp.com",
    projectId: "mygallary-535f8",
    storageBucket: "mygallary-535f8.appspot.com",
    messagingSenderId: "398763530577",
    appId: "1:398763530577:web:fb852f57ab2ea83f0b5b70",
    measurementId: "G-STVMEPSTQ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const projectStroage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export {projectStroage,projectFirestore,timestamp}