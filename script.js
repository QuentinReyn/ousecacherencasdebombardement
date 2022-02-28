var isDarkMode = false;
var defaultLat = 46.5;
var defaultLong = 4.5;
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicXVlbnRpbnJleW5hdWQiLCJhIjoiY2wwNzhnMHFxMDU4ajNscXBkcm1haTJtZiJ9.G6wqJBN17dhcdKUtbLFvyw';
var mbDarkLayer = "mapbox/dark-v10";
var mbLigthLayer = "mapbox/streets-v11";
var mbAttr = 'Map &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' + 'Mapbox© <a href="https://www.mapbox.com/"></a>GpPlugin © <a href="https://geoservices.ign.fr/index.html" target="_blank">IGN</a>';
var map;
//var map = L.map("map").setView([defaultLat, defaultLong], 7);
var lightMapLayer = L.tileLayer(
    mbUrl,
  { id: mbLigthLayer,tileSize: 512, zoomOffset: -1 ,attribution: mbAttr}
);
var darkMapLayer = L.tileLayer(
  mbUrl,
  { id: mbDarkLayer, tileSize: 512, zoomOffset: -1,attribution: mbAttr }
);
//map.addLayer(lightMapLayer);
function onLoad() {
    initMap();
}

function initMap() {
    map = L.map('map', {
        center: [defaultLat, defaultLong],
        zoom: 7,
        layers: [lightMapLayer]
    });
    L.control.scale({ imperial: false }).addTo(map);
    /*var geojsonLayer = $.getJSON(window.location.origin + "/assets/departments.json", function (json) {
        L.geoJson(json.features, { style: styleDepartment/*, onEachFeature: onEachFeature }).addTo(departmentsLayer);
        map.addLayer(departmentsLayer);
    });*/
}

function darkMode() {
  if(isDarkMode){
      isDarkMode = false;
  }
 else{
       isDarkMode = true;
   }
  var element = document.body;
  element.classList.toggle("dark-mode");
  isDarkMode ? darkMap() : lightMap();
}

function lightMap() {
  map.removeLayer(darkMapLayer);
  map.addLayer(lightMapLayer);
}

function darkMap() {
  map.removeLayer(lightMapLayer);
  map.addLayer(darkMapLayer);
}
