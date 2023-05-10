import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCMlpfQ8N2BHKsxe16Np6E6PS8Ub8v_9kc',
  authDomain: 'live-chatroom-dbdc2.firebaseapp.com',
  projectId: 'live-chatroom-dbdc2',
  storageBucket: 'live-chatroom-dbdc2.appspot.com',
  messagingSenderId: '31330802920',
  appId: '1:31330802920:web:a44f7ce11057109753bd5d'
}

//init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
const auth = getAuth()
// const projectAuth = firebase.auth()
// const projectFirestore = firebase.firestore()
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export { projectAuth, projectFirestore, timestamp }
export { db, auth }
