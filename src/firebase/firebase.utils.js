import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth"; // authentication

// copied from firebase
const config = {
  apiKey: "AIzaSyDipqAaTqixp58YXTABJCY1TfPNe1IYEK4",
  authDomain: "crown-clothing-24c45.firebaseapp.com",
  databaseURL: "https://crown-clothing-24c45.firebaseio.com",
  projectId: "crown-clothing-24c45",
  storageBucket: "crown-clothing-24c45.appspot.com",
  messagingSenderId: "952161709839",
  appId: "1:952161709839:web:942b154c5603ea5242987a",
  measurementId: "G-TB1HMKV8EG"
};

// init app
firebase.initializeApp(config);

// getting userData
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
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


// exporting auth & firestore to be used in our application
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google sign in code (from documentation)
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
