const HUNDRED = 100;

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

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Player").doc(user.uid).set({
            name: "Anonymous",
            score: HUNDRED
        });
    });

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

function showName() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("Player").doc(user.uid)
        .onSnapshot(function (snap) {
            console.log(snap.data());
            document.getElementById("friend").innerHTML = snap.data().name;
            });
    });
  }

function changeName() {
    document.getElementById("nameForm").addEventListener("submit", function (e) {
        firebase.auth().onAuthStateChanged(function (user) {
            e.preventDefault();
            let userName = document.getElementById("changeName").value;
            db.collection("Player").doc(user.uid).update({
                name: userName
            });
        });
    });
}

/**
 * firebase log user score
 */
function writeScore(x){
    document.getElementById("deal").addEventListener("click", function(e){
        firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Player").doc(user.uid).update({
            score: x
        });
        });
    });
}


changeName();
showName();