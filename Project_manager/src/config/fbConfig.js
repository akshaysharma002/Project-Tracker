import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAdiyZg4FWG5NDiBSRYaQ7Snd_sqoFibzM",
  authDomain: "akshatmarioplan.firebaseapp.com",
  databaseURL: "https://akshatmarioplan.firebaseio.com",
  projectId: "akshatmarioplan",
  storageBucket: "akshatmarioplan.appspot.com",
  messagingSenderId: "508391323759",
  appId: "1:508391323759:web:2edb0b8b53451bb0aaf59a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;