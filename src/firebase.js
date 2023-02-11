import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDjvYdFI1yGTea6OBLyf4LQWnbDfcW1vjA",
  authDomain: "netflixclone-b98d1.firebaseapp.com",
  projectId: "netflixclone-b98d1",
  storageBucket: "netflixclone-b98d1.appspot.com",
  messagingSenderId: "919201432805",
  appId: "1:919201432805:web:c1742eefbd95f0bd19800c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth}
export default db;