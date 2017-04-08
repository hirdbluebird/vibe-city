// variables for the menu toggle
var iteration = 0;
var toggle = false;

function toggleSwitch() {

  var listLinks = document.getElementById('list-links');
  var switcher = document.getElementById('switcher-button');
  var switcherText = document.getElementById('switcher-text');

  // adds inline styles if they don't exist
  if(!switcher.style.left) switcher.style.left = '0px';
  if(!listLinks.style.height) listLinks.style.height = '0px';

  function doStuffTimeout(){
    if(!toggle) {

              var timer = setTimeout(function(){
                if(iteration <= 30){

                  // picks values of the toggled elements
                  var switcherLeft = switcher.style.left;
                  var listLinksHeight = listLinks.style.height;

                  iteration++;

                  // change values style properties
                  listLinks.style.height = ( parseInt(listLinksHeight) + 8.9995) + 'px';
                  switcher.style.left = ( parseInt(switcherLeft) + 1) + 'px';
                  switcher.style.backgroundColor = '#54c0cd';
                  switcherText.textContent = 'on';

                  // recursion call
                  doStuffTimeout();
                } else {
                  // stop animation
                  clearInterval(timer);
                  toggle = true;
                }
              }, 20);

    } else {

            var timer = setTimeout(function(){

                if(!iteration == 0){

                  // picks values of the toggled elements
                  var switcherLeft = switcher.style.left;
                  var listLinksHeight = listLinks.style.height;

                  iteration--;

                  // change values style properties
                  listLinks.style.height = ( parseInt(listLinksHeight) - 8.9995) + 'px';
                  switcher.style.left = ( parseInt(switcherLeft) - 1) + 'px';
                  switcher.style.backgroundColor = '#999999';
                  switcherText.textContent = 'off';

                  // recursion call
                  doStuffTimeout();
                } else {
                  clearInterval(timer);
                  toggle = false;
                }
              }, 20);
    }
  }

  doStuffTimeout();
}

// add event on the switch button
document.getElementById('switcher-button').addEventListener('click', toggleSwitch );


// initialize Google Map
function initialize() {
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(48.551087, 35.884840),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var myLatLng = new google.maps.LatLng(48.551087,35.884840);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
