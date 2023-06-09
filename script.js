// script.js
const markerMap = L.map('shapeMap').setView([46.058827, 14.534362], 12);
const marker = L.marker([46.058827, 14.534362]).addTo(markerMap);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 18
}).addTo(markerMap);
