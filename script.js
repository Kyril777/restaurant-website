
/* Google Map */
var map;

function initialize(){
	var firstLocation = new google.maps.LatLng(39.849255, -75.004284);
		
	var mapOptions = {
		zoom: 14,
		center: firstLocation
	};
		
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
	var marker = new google.maps.Marker({
		position: firstLocation,
		map: map
	})
}
		
function loadScript(){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;

/* End of Google Map.  */