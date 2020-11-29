$(document).ready(function (){
    var lat = 50.899780;
    var long = 4.312670;

    var mymap = L.map('map').setView([lat, long], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mymap);

    var marker = L.marker([lat, long]).addTo(mymap);
    marker.bindPopup("<b>Slagerij - Boucherie Herremans</b>").openPopup();
});