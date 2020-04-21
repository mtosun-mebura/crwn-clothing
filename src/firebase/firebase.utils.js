import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyB8jf_XKfxF1IPzvNVq86RR5Ghrl4B62rk",
	authDomain: "crwn-db-c5828.firebaseapp.com",
	databaseURL: "https://crwn-db-c5828.firebaseio.com",
	projectId: "crwn-db-c5828",
	storageBucket: "crwn-db-c5828.appspot.com",
	messagingSenderId: "980748762959",
	appId: "1:980748762959:web:7e1e4cfc2749b125fb4f3a",
	measurementId: "G-E9SNYRZ771"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
