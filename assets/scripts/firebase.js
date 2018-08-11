// TODO: LINK TO FIREBASE AND SEND FORM INFORMATION TO IT

let form = document.getElementById('entryForm');

form.onsubmit = () => {
  let name = document.getElementById('name').value;
  let address = document.getElementById('address').value;
  let originCountries = $('#originCountries').val();
  let category = document.getElementById('category').value;
  let google = false;
  let radios = document.getElementsByName('online');

  for (var i = 0, length = radios.length; i < length; i++) {
     if (radios[i].checked) {
      google = radios[i].value;
      break;
     }
  }

  let otherInfo = document.getElementById('moreInfo').value;
  let telephone = document.getElementById('telephone').value;


  // Initialize an instance of Firebase
  firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  // Add a new document with a generated id.
  db.collection("userData").add({
      name: name,
      address: address,
      originCountries: originCountries,
      category: category,
      google: google,
      otherInfo: otherInfo,
      telephoneNum: telephone
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

};