// GET ENTRIES
let getEntries = () => {
    let fb = firebase.initializeApp(firebaseConfig);
    fb.database().ref('/user-data/').once('value')
        .then(function(snapshot) {
            createMarkers(snapshot.val());
        });
}

// CREATE MARKERS FROM ENTRIES
let createMarkers = (entriesObj) => {

    // let markers = [];

    for (const entry in entriesObj) {
        // create marker
        myMarker = mapfit.Marker();

        if (entriesObj.hasOwnProperty(entry)) {

            // set address property
            myMarker.address = entriesObj[entry].address;

            // add marker to map
            map.addMarker(myMarker);
            
        }
    }

    
    // console.log(entriesObj);
    
}

// CREATE MARKER TOOLTIP FROM ENTRIES' INFO



getEntries();