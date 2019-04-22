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

    for (const entry in entriesObj) {
        // create marker todo
        let marker = new mapboxgl.Marker()      
        
        console.log(`helooo`);

        if (entriesObj.hasOwnProperty(entry)) {

            console.log(entriesObj[entry]);

            // set lnglat property todo
            marker.setLngLat(entriesObj[entry]);

            // add marker to map todo
            marker.addTo(map);

            // CREATE MARKER TOOLTIP FROM ENTRIES' INFO todo
            let infoCard = mapfit.PlaceInfo(myMarker);
            infoCard.setTitle(entriesObj[entry].name);
            infoCard.setDescription(entriesObj[entry].address + '<br/>' + entriesObj[entry].category + '<br/>' + entriesObj[entry].originCountires);

            myMarker.setPlaceInfo(infoCard);

        }
    }    
}

getEntries();