import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBTckE7YF2Fm88pipdTsHn5rJK9Nymf47s",
    authDomain: "crwn-db-64b06.firebaseapp.com",
    projectId: "crwn-db-64b06",
    storageBucket: "crwn-db-64b06.appspot.com",
    messagingSenderId: "921200636196",
    appId: "1:921200636196:web:eec32382c4dd5187b903b1",
    measurementId: "G-T5NGHCEQ2T"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	// console.log(snapShot);

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}	
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;