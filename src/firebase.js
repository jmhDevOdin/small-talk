import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZhq6cuTLNztEuv-WZdU_8XRot3LnNBpI",
  authDomain: "tonal-f1490.firebaseapp.com",
  databaseURL: "https://tonal-f1490.firebaseio.com",
  projectId: "tonal-f1490",
  storageBucket: "tonal-f1490.appspot.com",
  messagingSenderId: "101880650035",
  appId: "1:101880650035:web:778508a21f0d1f91c60646",
  measurementId: "G-1HHT8Y49JG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;