import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDeU1kmGNdV6XtHX7KsUijQcMy1q4_04A4",
    authDomain: "netflix-clone-4ea51.firebaseapp.com",
    projectId: "netflix-clone-4ea51",
    storageBucket: "netflix-clone-4ea51.appspot.com",
    messagingSenderId: "372953925494",
    appId: "1:372953925494:web:35f2936906323fdb63dc57"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {auth};
  export  {db};
  export default firebaseApp;