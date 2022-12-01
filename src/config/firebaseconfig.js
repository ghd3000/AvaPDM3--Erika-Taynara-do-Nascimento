import firebase from "firebase"
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "8asd48as1das1dasd8asd1a9s8d1d81as",
  authDomain: "tasks-1s6a5d16a.firebaseapp.com",
  databaseURL: "https://tasks-1s6a5d16a-default-rtdb.com.firebaseio.com",
  projectId: "tasks-1s6a5d16a",
  storageBucket: "tasks-1s6a5d16a.appspot.com",
  messagingSenderId: "15561561651",
  appId: "1:15561561651:web:1d5a6s1d5a61d65s"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database