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
                url: "wwhttps://api.yelp.com/v3/businesses/search?term=" + food + "&location=" + zipcode,
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

});