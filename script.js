// user input
// target the dom element 
// retrieve the value
// store that value as a var
// clear the search input 

// search apis
// api call for current cons
// name, date, temp, wind, humid. etc
// save above as vars
// display info on DOM 

// search apis
// api call for forecast cons
// name, date, temp, wind, humid. etc
// save above as vars
// display info on DOM 


// save that city to localstorage


$(document).ready(function(){

    $("#searchBtn").on("click", function(){
        var searchCity = $("#searchValue").val() // Denver
        $("#searchValue").val("")
        console.log("searchCity"+ searchCity);

        searchCurrentWeather(searchCity) // searchCity = Denver

    })

    function searchCurrentWeather(cityName) { // cityName = ???
        console.log("cityName" + cityName) // cityName = Denver
        $.ajax({
            type: "GET", 
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=25899f976ac10a6f3a73624013195b56&units=imperial", 
            dataType: "JSON", 
            success: function(data){
                console.log(data);
                var title = cityName
                var wind = $("<p>").addClass("card-text").text("wind speed: " + data.wind.speed)
                var humid = $("<p>").addClass("card-text").text("humidity: " + data.main.humidity)
                var temp =$("<p>").addClass("card-text").text("temperature: " + data.main.temp)
                var card = $("<div>").addClass("card")
                var cardBody = $("<div>").addClass("card-body")

                cardBody.append(title, temp, wind, humid)
                card.append(cardBody)
                $("#current").append(card)
                searchForecast(cityName) 
                
            }
        })
    }

    function searchForecast(cityName) {
        console.log('Yay it worked!!')
        $.ajax({
            type: "GET", 
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=25899f976ac10a6f3a73624013195b56&units=imperial", 
            dataType: "JSON", 
            success: function(data){
                console.log(data);
                var title = cityName
                var wind = $("<p>").addClass("card-text").text("wind speed: " + data.wind.speed)
                var humid = $("<p>").addClass("card-text").text("humidity: " + data.main.humidity)
                var temp =$("<p>").addClass("card-text").text("temperature: " + data.main.temp)
                var card = $("<div>").addClass("card")
                var cardBody = $("<div>").addClass("card-body")


            }
    })
}

    function saveToStorage(cityName) {

    }

});
