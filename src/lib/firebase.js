

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "feedgram-co.firebaseapp.com",
    databaseURL: process.env.DATABASE_URL,
    projectId: "feedgram-co",
    storageBucket: "feedgram-co.appspot.com",
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
  };

  const firebase = window.firebase.initializeApp(firebaseConfig);
  const { FieldValue } = window.firebase.firestore;

  export { firebase, FieldValue };

  //field value will allows us to make modification to our data
  // gives us array and string methods