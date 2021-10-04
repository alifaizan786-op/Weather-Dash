var inputCity = $("#cityName")
var searchButton = $(".saveBtn")

searchButton.on("click",function(){
    
    forecastData()
})


function forecastData () {
    var api1 = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity.val() + "&units=imperial&appid=a2eb597d271dbead6179a99d9d6c31da"
    fetch(api1, {
        method: 'GET'
    })
    .then(function (response) {
        var api2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&units=imperial&appid=a2eb597d271dbead6179a99d9d6c31da"
        fetch(api2, {
            method: 'GET'
        })
        .then(function (response) {
            return response.json
        })
        .then(function (data) {
            console.log(data)
        })
    })
    
}

