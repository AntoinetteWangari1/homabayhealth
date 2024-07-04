var map = L.map('map').setView([-0.6059013,34.2278763], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var countyWmsUrl = 'http://localhost:8084/geoserver/healthKenya/wms';

var countyLayer = L.tileLayer.wms(countyWmsUrl, {
    layers: 'healthKenya:homabaycty',
    format: 'image/png',
    transparent: true,
    attribution: "County Data"
}).addTo(map);

var healthFacilityWmsUrl = 'http://localhost:8084/geoserver/healthKenya/wms';

var healthFacilityLayer = L.tileLayer.wms(healthFacilityWmsUrl, {
    layers: 'healthKenya:healthAnto',
    format: 'image/png',
    transparent: true,
    attribution: "Health Facility Data"
}).addTo(map);

var baseLayers = {
    "OpenStreetMap": map
};

var overlays = {
    "Counties": countyLayer,
    "Health Facilities": healthFacilityLayer
};

L.control.layers(baseLayers, overlays).addTo(map);
