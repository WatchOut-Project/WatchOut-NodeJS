google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addListener(map, 'center_changed', centerChanged);
google.maps.event.addListener(map, 'zoom_changed', zoomChanged);
google.maps.event.addListenerOnce(map, 'load', function(){
    $('.blur').blurjs({
        source: 'body',
        radius:10
    });
});

var map;
var myloc;
var maxZoomLevel = 30;
var maxZoomService = new google.maps.MaxZoomService();

function initialize() {
    var mapOptions = {
        zoom: 16,
        minZoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        mapTypeControl: false,
        panControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    myloc = new google.maps.Marker({
        clickable: false,
        shadow: null,
        icon: "http://i.stack.imgur.com/orZ4x.png",
        map: map
    });

    if (!!navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        map.setCenter(new google.maps.LatLng(-34.397, 150.644));
    }
}

function showPosition(position) {
    var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(geolocate);
    myloc.setPosition(geolocate);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
        break;
        case error.POSITION_UNAVAILABLE:
        break;
        case error.TIMEOUT:
        break;
        case error.UNKNOWN_ERROR:
        break;
    }
    map.setCenter(new google.maps.LatLng(-34.397, 150.644));
}

function centerChanged() {
    maxZoomService.getMaxZoomAtLatLng(map.getCenter(), function (MaxZoomResult) {
        if (MaxZoomResult.status == google.maps.MaxZoomStatus.OK) {
            maxZoomLevel = MaxZoomResult.zoom;
        }
    });
}

function zoomChanged() {
    if (map.getZoom() > maxZoomLevel) {
        map.setZoom(maxZoomLevel);
    }
}