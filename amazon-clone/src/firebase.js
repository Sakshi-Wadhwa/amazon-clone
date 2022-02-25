import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMNonLU8iksL-vWwN-eoqj1yYolRZyY1o",
    authDomain: "clone-7e498.firebaseapp.com",
    projectId: "clone-7e498",
    storageBucket: "clone-7e498.appspot.com",
    messagingSenderId: "1096704851319",
    appId: "1:1096704851319:web:bef09b4d35e2f5373bb572",
    measurementId: "G-D49R2K6Z8L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };