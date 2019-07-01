$(document).ready(function () {
    // CODE FOR LOGIC IN HOME PAGE HERE

    // # On Page Load
    // Pulling zipcode from form info on We Pick button.
    // uses zipcode and basic food search to search all food locations around said zip code.


    $('#wePick').click(pullzip)

    function pullzip() {
        var zipcode = $('#Zip').val().trim()
        food = "food"
        console.log(zipcode)
        if (zipcode === "") {
            alert("Please enter a valid zipcode.")
        }
        else {
            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + food + "&location=" + zipcode,
                method: "GET",
                dataType: 'json',
                headers: {
                    Authorization: "Bearer QuLOrfxmj5qnOvQFcqHJwI1gcHWh2JeikTN36-sVZJRT3lqDzUC02pSCNgii8pJX0nRncsVZ1shO7hZvGtlEvoj4E8VIqA_9IQcR-vVWGXuKT2Q6153rE06MQAYVXXYx",
                }
            }).then(function (result) {
                console.log(result);
            })
        }
    }

    $('#youDecide').click(pullOptions)

    //Pulling options from modal that user inputs. Take multiple inputs and places them in URL.
    function pullOptions(event) {
        event.preventDefault()
        var zipcode = $('#Zip').val().trim()
        var food = $('#food').val().trim()
        console.log(zipcode)

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + food + "&location=" + zipcode,
            method: "GET",
            dataType: 'json',
            headers: {
                Authorization: "Bearer QuLOrfxmj5qnOvQFcqHJwI1gcHWh2JeikTN36-sVZJRT3lqDzUC02pSCNgii8pJX0nRncsVZ1shO7hZvGtlEvoj4E8VIqA_9IQcR-vVWGXuKT2Q6153rE06MQAYVXXYx",
            }
        }).then(function (result) {
            console.log(result);
        })


    }

    var map, infoWindow;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 10
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                function queryPlaces(searchType) {
                    var queryString = $.param({
                        key: "AIzaSyA8gHovWgTSvaTup3gu9XGSa-4kyNws6uI",
                        query: searchType,
                        fields: "name,geometry",
                        location: pos.lat + "," + pos.lng
                    });
                    var queryUrl = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?" + queryString;
                    return $.ajax({
                        method: "GET",
                        url: queryUrl
                    });
                }

                queryPlaces("restaurant").then(function (response) {
                    console.log(response);
                    for(var i = 0; i < response.results.length; i++) {
                        var loc = response.results[i].geometry.location;
                        var marker = new google.maps.Marker({position: loc, map: map});
                    }
                })
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

});