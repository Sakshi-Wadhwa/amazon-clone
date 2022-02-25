import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyAMNonLU8iksL-vWwN-eoqj1yYolRZyY1o",
//     authDomain: "clone-7e498.firebaseapp.com",
//     projectId: "clone-7e498",
//     storageBucket: "clone-7e498.appspot.com",
//     messagingSenderId: "1096704851319",
//     appId: "1:1096704851319:web:bef09b4d35e2f5373bb572",
//     measurementId: "G-D49R2K6Z8L"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDFTzUk8w8FYtINiYYzx-3r-AhKzzFot0I",
  authDomain: "challenge-4a2f9.firebaseapp.com",
  projectId: "challenge-4a2f9",
  storageBucket: "challenge-4a2f9.appspot.com",
  messagingSenderId: "198245114638",
  appId: "1:198245114638:web:ba499aa109e141af2fed5f",
  measurementId: "G-02T88ZCSVX"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  //auth refers to authentication