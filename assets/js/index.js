$(document).ready(function () {
    // CODE FOR LOGIC IN HOME PAGE HERE

    // # On Page Load

        // * Set up search using a form's on submit event

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
});