mapboxgl.accessToken = mapToken;
console.log(mapToken);
     const map = new mapboxgl.Map({
            container: 'map', // container ID
             style: 'mapbox://styles/mapbox/streets-v12', // style URL
             center: listing.geometry.coordinates,
            zoom: 9
    });
console.log(coordinates);

const marker = new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates)  // Listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(`<h4>${listing.location}</h4><p>Exact Location will be provided after booking</p>`)
.addTo(map));
