// TODO: LINK TO FIREBASE AND SEND FORM INFORMATION TO IT

let form = document.getElementById('entryForm');

submitData = () => {
  // Initialize an instance of Firebase
  firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  // Add a new document with a generated id.
  db.collection("userData").add({
      name: '',
      address: '',
      originCountries: [],
      category: '',
      google: false,
      otherInfo: '',
      telephoneNum: 1234567890
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}

form.onsubmit = () => {
  let name = document.getElementById('name').value;
  let address = document.getElementById('address').value;
  let originCountries = $('#originCountries').val();
  let category = document.getElementById('category').value;
  let google = false;
  var radios = document.getElementsByName('online');

  for (var i = 0, length = radios.length; i < length; i++) {
     if (radios[i].checked) {
      google = radios[i].value;
      break;
     }
  }

  let otherInfo = document.getElementById('moreInfo').value;
  let telephone = document.getElementById('telephone').value;

};