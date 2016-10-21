var UserLocated = false;
var MeLocaations;

(function(window, $) {

  var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);
  console.log($mapster);
  $mapster.mapster('addMarker', {lat: 4.737767, lng: -74.049054});

}(window, jQuery));
