
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
                    //Looping through each buisness. Currently set to 20
                    for (i = 0; i < result.businesses.length; i++) {
                        //able to change image sizes. Kinda useless actually since it makes the image look very blurry. May remove.
                        var img = $('<div>')
                        img.text(result.businesses[i].image_url)
                        img.text(function () {
                            return $(this).text().replace("o.jpg", "l.jpg");
                        })

                        imgMedium = img.text()

                        console.log(result);
                        //making card with buisness info and pictures.
                        var cardMain = $('<div>')
                        cardMain.attr('class', 'row w-25 mr-5 mt-5')
                        $('#cardsBody').append(cardMain)

                        var innerMain = $('<div>')
                        innerMain.attr('class', 'col s12 m7')
                        $(cardMain).append(innerMain)

                        var actualCard = $('<div>')
                        actualCard.attr('class', 'card')
                        $(innerMain).append(actualCard)

                        var imageDiv = $('<div>')
                        imageDiv.attr('class', 'card-image')
                        $(actualCard).append(imageDiv)

                        var picture = $('<img>')
                        picture.attr('class', 'w-100 h-100')
                        picture.attr('src', imgMedium)
                        $(imageDiv).append(picture)

                        var title = $('<span>')
                        title.attr('card-title')
                        title.text(result.businesses[i].name)
                        $(imageDiv).append(title)

                        var cardContent = $('<div>')
                        cardContent.attr('class', 'card-content')
                        $(actualCard).append(cardContent)

                        var number = $('<p>')
                        number.text(result.businesses[i].display_phone)
                        $(cardContent).append(number)

                        var cardAction = $('<div>')
                        cardAction.attr('class', 'card-action')
                        $(actualCard).append(cardAction)

                        var link = $('<a>')
                        link.attr('href', result.businesses[i].url)
                        link.text('Go to website?')
                        $(cardAction).append(link)
                    }
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
                //Looping through each buisness. Currently set to 20
            for (i=0; i<result.businesses.length; i++) {
                //able to change image sizes. Kinda useless actually since it makes the image look very blurry. May remove.
               var img = $('<div>')
               img.text(result.businesses[i].image_url)
               img.text(function(){
                return $(this).text().replace("o.jpg", "l.jpg");
               })

               imgMedium = img.text()
                
                console.log(result);
                //making card with buisness info and pictures.
                var cardMain = $('<div>')
                cardMain.attr('class','row w-25 mr-5 mt-5')
                $('#cardsBody').append(cardMain)

                var innerMain = $('<div>')
                innerMain.attr('class', 'col s12 m7')
                $(cardMain).append(innerMain)

                var actualCard= $('<div>')
                actualCard.attr('class', 'card')
                $(innerMain).append(actualCard)

                var imageDiv= $('<div>')
                imageDiv.attr('class', 'card-image')
                $(actualCard).append(imageDiv)

                var picture = $('<img>')
                picture.attr('class', 'w-100 h-100')
                picture.attr('src', imgMedium)
                $(imageDiv).append(picture)

                var title = $('<span>')
                title.attr('card-title')
                title.text(result.businesses[i].name)
                $(imageDiv).append(title)

                var cardContent = $('<div>')
                cardContent.attr('class', 'card-content')
                $(actualCard).append(cardContent)

                var number = $('<p>')
                number.text(result.businesses[i].display_phone)
                $(cardContent).append(number)

                var cardAction = $('<div>')
                cardAction.attr('class', 'card-action')
                $(actualCard).append(cardAction)

                var link = $('<a>')
                link.attr('href', result.businesses[i].url)
                link.text('Go to website?')
                $(cardAction).append(link)
            }
            })
        }
    });
