const THOUSAND = 1000;
let loginButton = document.getElementById("login");
let logoutButton = document.getElementById("logout");
let quitbtn = document.getElementById("quit");
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
const db = firebase.firestore();
/**
 * Firebase
 */

// Click event listener for quit button.
quitbtn.addEventListener("click", showLeaderboard);


// Click event listener for the login button.
loginButton.addEventListener("click", function (e) {
    firebase.auth().signInAnonymously();

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Player").doc(user.uid).set({
            name: "Anonymous",
            score: THOUSAND
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
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Player").doc(user.uid)
            .onSnapshot(function (snap) {
                document.getElementById("friend").innerHTML = "Hello, " + snap.data().name;
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
function writeScore(x) {
    document.getElementById("quit").addEventListener("click", function (e) {
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("Player").doc(user.uid).update({
                score: x
            });
        });
    });
}

/**
 * Show leaderboard
 */
function showLeaderboard() {
    let docRef = db.collection("Player");
    let myWindow = window.open("", "Leaderboard", "width=250,height=300");
    myWindow.document.write("Leaderboard");
    myWindow.document.write("<br>");
    db.collection("Player")
        .orderBy("score", "desc").limit(10)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let score = doc.data().name + "-----" + doc.data().score;
                let p = document.createElement("p");
                let node = document.createTextNode(score);
                p.appendChild(node);
                myWindow.document.write(p.innerHTML);
                myWindow.document.write("<br>");
            });
        });
}

changeName();
showName();