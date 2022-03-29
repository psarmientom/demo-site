// ==================== Leaflet Maps 

const map = L.map('map').setView([25.7178924, -80.2768308], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHNhcm1pZW50b20iLCJhIjoiY2tnMmU5eTh2MDdjcjJzbnhnM3oyMm15NSJ9.3Gf_eVrrTsUvfCbnmaqY5w'
}).addTo(map);

const marker = L.marker([25.7203569, -80.2773337]).addTo(map);

var circle = L.circle([25.7203569, -80.2773337], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

marker.bindPopup("<b>This is the University of Miami!</b><br>School of Communication.").openPopup();
circle.bindPopup("We are somewhere around here.");