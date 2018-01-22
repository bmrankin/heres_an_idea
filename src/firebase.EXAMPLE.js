import { initializeApp } from 'firebase'
// Initialize Firebase
// Get code from Firebase Console
  const app = initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  })

  export const db = app.database()
  export const exampleRef = db.ref('example')