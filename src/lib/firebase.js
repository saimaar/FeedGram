require('dotenv').config()

var firebaseConfig = {
    apiKey: ENV["API_KEY"],
    authDomain: "feedgram-co.firebaseapp.com",
    databaseURL: ENV["DATABASE_URL"],
    projectId: "feedgram-co",
    storageBucket: "feedgram-co.appspot.com",
    messagingSenderId: ENV["SENDER_ID"],
    appId: ENV["APP_ID"]
  };

  const firebase = window.firebase.initializeApp(firebaseConfig);
  const { FieldValue } = window.firebase.firestore;

  export { firebase, FieldValue };

  //field value will allows us to make modification to our data
  // gives us array and string methods