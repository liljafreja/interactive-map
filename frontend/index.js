const map = L.map('map').setView([59.8, 10.5], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on('click', function (e) {
    var popLocation = e.latlng;
    let lat = popLocation.lat
    let lng = popLocation.lng
    let calculationResult = httpGet(`http://127.0.0.1:5000/max_wave_height?longitude=${lng}&latitude=${lat}`)
    let message = getMessage(calculationResult);
    L.popup()
        .setLatLng(popLocation)
        .setContent(message)
        .openOn(map);
});


function getMessage(calculationResult) {
    if (calculationResult.status !== 200) {
        return `<p>The max wave height can not be calculated for this point.</p>`
    } else {
        let result = JSON.parse(calculationResult.responseText).maxWaveHeight;
        return `<p>The max wave height is<br/>${result}</p>`
    }
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp;
}
