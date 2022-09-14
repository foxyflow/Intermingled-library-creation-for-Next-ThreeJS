import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCxT-SD10jpLgWKs5a9j3eUVUGH0YNfZ8Y",
authDomain: "foxyfireflow.firebaseapp.com",
projectId: "foxyfireflow",
storageBucket: "foxyfireflow.appspot.com",
messagingSenderId: "477194065769",
appId: "1:477194065769:web:c5c9dff11ed3e4db2dcff8",
measurementId: "G-XDV34Z20BQ"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
//const firebaseApp = initializeApp(firebaseConfig)

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//export const googleAuthProvider = new GoogleAuthProvider();
export const auth = firebase.auth(); 
//export const auth = getAuth(firebaseApp);
export const firestore = firebase.firestore();
//export const firestore = getFirestore(firebaseApp);
export const storage = firebase.storage();


export const fromMillis = firebase.firestore.Timestamp.fromMillis;


/**  Helper functions for getting a users/{uid} document and username
* @param  {string} username
*/
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

/**  Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
*/
export function postToJSON(doc){
    const data = doc.data();
    return { 
        ...data(),
        // Gotcha! firestore timestamps NOT serializable to JSON
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    };
}




