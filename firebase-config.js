// Shared board setup.
// Paste the values from your Firebase project here (Project settings > Your apps > Web app).
// While apiKey is empty, the board saves in each browser separately.
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

if (firebaseConfig.apiKey && window.firebase) {
  firebase.initializeApp(firebaseConfig);
  window.KANBAN_DB = firebase.firestore();
}
