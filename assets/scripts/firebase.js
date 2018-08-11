// TODO: LINK TO FIREBASE AND SEND FORM INFORMATION TO IT

var mykey = config.key;
console.log(mykey);

// Initialize an instance of Firebase
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();