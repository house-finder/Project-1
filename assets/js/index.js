$(document).ready(function () {
    // CODE FOR LOGIC IN HOME PAGE HERE

    // # On Page Load

        // * Set up search using a form's on submit event
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston",
            method: "GET",
            dataType: 'json',
            headers: {
                Authorization: "Bearer ZVex6dzsWTaMZqG2tz0veaxVfFmePcq5QWtXvzJqTQp53M11_NN3lueZn5gQYNDWlSJkzUweOJMTIRwyyYs4UPsHhJV3HhJB8m1WurHojHMgfy4MxTKz1zZLzazlXHYx",
            }
        }).then(function (result) {
            console.log(result);
        }) 

    // # On Submit

        // * Prevent default actions (don't want page reloading)

        // * get band search term from input box (store in variable)

        // * search for attraction using this url: 
        // ```javascript
        // var queryUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + searchTerm + "&size=1&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=MY_API_KEY"
        // ```
        // this searches for music by the keyword only pulling back 1 result

        // * After getting an attraction Id from the previous ajax call

        //     * Search for events with attraction id using this url:
        //     ```javascript
        //     var gigUrl = "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=" + attractionId + "&size=10&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=52A3SfDlelkwe86BqMkd4uTsjXEFhoIi"
        //     ```
        //     * After receiving results from the gig search

        //         * build a list of cards about each event containing pictures, location info, anything about event

        //         * build links to view more: /pages/show.html?eventid=eventid from search (this is link to our own other page)

        var wePick = [];

        var distance = ["5","10","15","20","50"];
        var priceRange = ["$1-$10","$11-$20","$21-$30","$31-40"];
        var city = [];
        var zipcode = [];
        var customSearch =[];

        function displayResults (){
            $(this).attr(distance);
            $(this).attr(priceRange);
            $(this).attr(zipcode);
        }





    $(document).on("click",displayResults);


});