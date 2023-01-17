//Carte Leaflet
let map = L.map('map').setView([50.629719, 3.062781], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([50.629719, 3.062781]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();