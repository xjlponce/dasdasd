import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkBVngn2lJlaF5uOHmbLRRSU4FzWhggtU",
  authDomain: "react-data-88b57.firebaseapp.com",
  databaseURL: "https://react-data-88b57-default-rtdb.firebaseio.com",
  projectId: "react-data-88b57",
  storageBucket: "react-data-88b57.appspot.com",
  messagingSenderId: "248720250895",
  appId: "1:248720250895:web:67969fa20a582dc74aeb7a"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;