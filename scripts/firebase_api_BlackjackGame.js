// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDGJR4asG6hNNS7pkZ-WSrxcUPhVdAnlx4",
    authDomain: "blackjack-comp1537.firebaseapp.com",
    databaseURL: "https://blackjack-comp1537.firebaseio.com",
    projectId: "blackjack-comp1537",
    storageBucket: "blackjack-comp1537.appspot.com",
    messagingSenderId: "626682707613",
    appId: "1:626682707613:web:f05be83921267f694f5e74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
const db = firebase.firestore();

/**
* Firebase
*/
let loginButton = document.getElementById("login");
let logoutButton = document.getElementById("logout");

// Click event listener for the login button.
loginButton.addEventListener("click", function (e) {
    firebase.auth().signInAnonymously();
});

// Click event listener for the logout button.
logoutButton.addEventListener("click", function (e) {
    firebase.auth().signOut();
});

// Authenticates user when log in button is clicked
// Once authenticated the log-out button will show.
firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    if (user) {
        logoutButton.classList.remove("hidden");
    } else {
        logoutButton.classList.add("hidden");
    }
});