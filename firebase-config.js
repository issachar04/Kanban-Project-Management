// Shared board setup.
// Paste the values from your Firebase project here (Project settings > Your apps > Web app).
// While apiKey is empty, the board saves in each browser separately.
const firebaseConfig = {
  apiKey: "AIzaSyAedfKX2zvfyZsEnmq4lvc8nI4UuEncevo",
  authDomain: "kanban-board-82771.firebaseapp.com",
  projectId: "kanban-board-82771",
  storageBucket: "kanban-board-82771.firebasestorage.app",
  messagingSenderId: "291243538273",
  appId: "1:291243538273:web:edf7f12eee94dfe8bff720",
};

if (firebaseConfig.apiKey && window.firebase) {
  firebase.initializeApp(firebaseConfig);
  window.KANBAN_DB = firebase.firestore();
}
