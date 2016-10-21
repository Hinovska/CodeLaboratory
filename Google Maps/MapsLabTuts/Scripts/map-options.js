(function(window, google, mapster) {
  
  mapster.MAP_OPTIONS = {
    center: {lat: 4.737767, lng: -74.049054},
    zoom: 10,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    cluster: false
  };
  
}(window, google, window.Mapster || (window.Mapster = {})))
//Status API Training Shop Blog About Pricing
//© 2016 GitHub, Inc. Terms Privacy Security Contact Help