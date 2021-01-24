import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2L39nK-iSXNOONGTLXxz0nd1Yod_ompU",
    authDomain: "slack-2-9c1f2.firebaseapp.com",
    databaseURL: "https://slack-2-9c1f2.firebaseio.com",
    projectId: "slack-2-9c1f2",
    storageBucket: "slack-2-9c1f2.appspot.com",
    messagingSenderId: "257315101302",
    appId: "1:257315101302:web:19686dab731f08d1495d57",
    measurementId: "G-CF6EFNF96X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db