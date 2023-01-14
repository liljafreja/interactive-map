const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on('click', function(e) {
    var popLocation= e.latlng;
    let lat = popLocation.lat
    let lng = popLocation.lng
    let calculationResult = httpGet(`http://127.0.0.1:5000/max_wave_height?longitude=${lng}&latitude=${lat}`)
    let parsedMetric = JSON.parse(calculationResult)
    let maxWaveHeight = parsedMetric.maxWaveHeight
    let message;
    if (maxWaveHeight === 'nan') {
        message = `<p>The wave height can not be calculated on land.</p>`
    } else {
        message = `<p>The max wave height is<br />${maxWaveHeight}</p>`
    }
    var popup = L.popup()
        .setLatLng(popLocation)
        .setContent(message)
        .openOn(map);
});

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
