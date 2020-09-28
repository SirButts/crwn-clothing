
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCaLwqO-Kb69N91bChx3yYRvJv805ZpIGw",
    authDomain: "crwn-db-85160.firebaseapp.com",
    databaseURL: "https://crwn-db-85160.firebaseio.com",
    projectId: "crwn-db-85160",
    storageBucket: "crwn-db-85160.appspot.com",
    messagingSenderId: "230816502117",
    appId: "1:230816502117:web:c386c4ee05281d2664d18c",
    measurementId: "G-FJ22SGGV82"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



