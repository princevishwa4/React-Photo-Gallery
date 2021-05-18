import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYB7qKQvgPbpIfbeuA77NIPeGV92kPb1A",
    authDomain: "react-photo-gallery-4531c.firebaseapp.com",
    projectId: "react-photo-gallery-4531c",
    storageBucket: "react-photo-gallery-4531c.appspot.com",
    messagingSenderId: "641084821480",
    appId: "1:641084821480:web:f6b20fed57468ed3fb5e5d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };