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

export const createUserProfileDocument = async (userAuth, additionalData) => { //richiesta API ecco perchè async additionalData sono altri dati
	if (!userAuth) return; //se l'utente non è autenticato return

	const userRef = firestore.doc(`users/${userAuth.uid}`); //query per vedere se l'utente è stato inserito
	const snapShot = await userRef.get();

	if(!snapShot.exists) {	//quinidi se non esiste viene cre
		const { displayName, email } = userAuth; //preleva il nome e l'email dell'utente
		const createdAt = new Date(); //crea un nuovo oggetto javascript che si riferisce al tempo in cui viene creato (tipo un id)

		try {
			await userRef.set({ //async request per inserire i dati nel DB tramite il metodo crea ovvero set
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
	const collectionRef = firestore.collection(collectionKey);
	
	const batch = firestore.batch();
	//per ogni categoria (obj) assegna un id univoco contenuto in newDocRef
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit()
}


//sintassi per login con google
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;