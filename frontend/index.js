const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on('click', function(e) {
    var popLocation= e.latlng;
    var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<p>Hello world!<br />This is a nice popup.</p>')
        .openOn(map);
});