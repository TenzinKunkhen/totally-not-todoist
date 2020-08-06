import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCBfjjprMFpTB7qIUZpZrEu1RzmHRcn0Cs",
    authDomain: "totally-not.firebaseapp.com",
    databaseURL: "https://totally-not.firebaseio.com",
    projectId: "totally-not",
    storageBucket: "totally-not.appspot.com",
    messagingSenderId: "629099667039",
    appId: "1:629099667039:web:1e1dbeae6b0a4a5dab85ea",
    measurementId: "G-MLQ1LS1S78"
});

export { firebaseConfig as firebase };