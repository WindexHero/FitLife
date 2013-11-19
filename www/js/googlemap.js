function GoogleMap()
{
   
    var onSuccess = function(position) 
    {
        var myLat = position.coords.latitude;
        var myLong = position.coords.longitude;
        
        
        //MAP
        var mapOptions = 
        {
            center: new google.maps.LatLng(myLat, myLong),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: true
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"),
                                      mapOptions);

        var marker = new google.maps.Marker({
                                            position: new google.maps.LatLng(myLat, myLong),
                                            map: map,
                                            title:"Current Location"
                                            });
        
        // Create the search box and link it to the UI element.
        var input = /** @type {HTMLInputElement} */(
            document.getElementById('pac_input'));
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var searchBox = new google.maps.places.SearchBox(
          /** @type {HTMLInputElement} */(input));
          };
      

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
}


