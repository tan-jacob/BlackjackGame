// Temp variable to hold the anonymous user data if needed.
var data = null;
// Hold a reference to the anonymous current user.
var anonymousUser = firebase.auth().currentUser;
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The widget is rendered.
// Hide the loader.
document.getElementById('loader').style.display = 'none';
ui.start('#firebaseui-auth-container', {
    // Whether to upgrade anonymous users should be explicitly provided.
    // The user must already be signed in anonymously before FirebaseUI is
    // rendered.
    autoUpgradeAnonymousUsers: true,
    signInSuccessUrl: 'index.html',
    signInOptions: [
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // Process result. This will not trigger on merge conflicts.
            // On success redirect to signInSuccessUrl.
            return true;
        },
        // signInFailure callback must be provided to handle merge conflicts which
        // occur when an existing credential is linked to an anonymous user.
        signInFailure: function (error) {
            // For merge conflicts, the error.code will be
            // 'firebaseui/anonymous-upgrade-merge-conflict'.
            if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
                return Promise.resolve();
            }
            // The credential the user tried to sign in with.
            var cred = error.credential;
            // Save anonymous user data first.
            return app.database().ref('users/' + firebase.auth().currentUser.uid)
                .once('value')
                .then(function (user) {
                    // Original Anonymous Auth instance now has the new user.
                    return app.database().ref('users/' + user.uid).set(data);
                })
                .then(function () {
                    // Delete anonymnous user.
                    return anonymousUser.delete();
                })
                .then(function () {
                    // Clear data in case a new user signs in, and the state change
                    // triggers.
                    data = null;
                    // FirebaseUI will reset and the UI cleared when this promise
                    // resolves.
                    // signInSuccessWithAuthResult will not run. Successful sign-in
                    // logic has to be run explicitly.
                    window.location.assign('index.hml');
                });

        }
        
    }
    
});

firebase.auth().onAuthStateChanged(function (user) {
    // Add a new document with a generated id.
    db.collection("Player").doc(user.uid).set({
        name: user.displayName,
        email: user.email
    })
    }
);