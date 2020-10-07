import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB4Fxne8h9RbSNpNIjCVHGQ6OsNDLmhkg0",
    authDomain: "e-store-8ee01.firebaseapp.com",
    databaseURL: "https://e-store-8ee01.firebaseio.com",
    projectId: "e-store-8ee01",
    storageBucket: "e-store-8ee01.appspot.com",
    messagingSenderId: "333262353367",
    appId: "1:333262353367:web:4cac1270b10241e10b5192",
    measurementId: "G-9P548FPD3T"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;