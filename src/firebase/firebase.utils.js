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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); 
  
    const snapShot = await userRef.get();

    // const collectionSnapshot = await collectionRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

 export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   console.log(collectionKey)
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    
    batch.set(newDocRef, obj);
  })

  return await batch.commit();

 };

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  console.log(transformedCollection)
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;