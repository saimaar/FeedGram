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
  export { firebase };