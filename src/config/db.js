import Firebase from 'firebase'
import "firebase/firestore"

 let config = {
  apiKey: "AIzaSyC2SYGnIoTyuK4EdQp1VH9ByZgs0IpE-zQ",
  authDomain: "skincare-aa6c8.firebaseapp.com",
  databaseURL: "https://skincare-aa6c8.firebaseio.com",
  projectId: "skincare-aa6c8",
  storageBucket: "skincare-aa6c8.appspot.com",
  messagingSenderId: "285880241549",
  appId: "1:285880241549:web:89dbd463da6eeaa0bc81c4",
  measurementId: "G-LC7NBSVQV7"
  };
let app = Firebase.initializeApp(config)
// let db = app.database()
export const db = Firebase.firestore()
// let booksRef = db.ref('books')
