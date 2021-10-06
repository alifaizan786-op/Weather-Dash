var userCity = $("#cityName")
var searchButton = $(".saveBtn")
var curlocation = $("#location")
var curTemp = $("#temp")
var curHumid = $("#humi")
var curWind = $("#wind")
var curUV = $("#UV")
var curDate = $("#date")
var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || []
var searchedCitiesArr = []



searchButton.on("click",function(){
    searchedCitiesArr.push(userCity.val())
    localStorage.setItem("searchedCities", JSON.stringify(searchedCitiesArr))
    forecastData()
})

function makebuttons (){
    for ( var i = 0; i > searchedCities.length; i++){
         $(".savedButton").html( '<li><button id="' + searchedCities[i] + '">' + searchedCities[i] + '</button></li>' )
    }
}

function forecastData(){
    let api1 =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        userCity.val() +
        "&units=imperial&appid=a2eb597d271dbead6179a99d9d6c31da";

    $.ajax({
        url: api1,
        method: "GET",
    }).then(function (data) {
        console.log("I am current data: ");
        console.log(data);
        let api2 =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        data.coord.lat +
        "&lon=" +
        data.coord.lon +
        "&units=imperial&appid=a2eb597d271dbead6179a99d9d6c31da";
        $.ajax({
            url: api2,
            method: "GET",
        }).then(function (data2) {
            console.log("I am uv and extended data: ");
            console.log(data2);
            console.log(data2.current.temp);


            // Current Temperature
            console.log(moment.unix(data2.current.dt).format("M/DD/YYYY"))
            curlocation.text(userCity.val() +"  " + moment.unix(data2.current.dt).format("M/DD/YYYY"))
            curTemp.text(data2.current.temp)
            curHumid.text(data2.current.humidity)
            curWind.text(data2.current.wind_speed)
            curUV.text(data2.current.uvi)


            // to change the background color of uv index
            if(data2.current.uvi < 3){
                curUV.css("background-color","green")
                curUV.css("color","white")
            }
            if(data2.current.uvi > 3 && data2.current.uvi < 6 ){
                curUV.css("background-color","yellow")
                curUV.css("color","black")
            }
            if(data2.current.uvi > 6 && data2.current.uvi < 7 ){
                curUV.css("background-color","orange")
            }
            if(data2.current.uvi > 7 && data2.current.uvi < 11 ){
                curUV.css("background-color","red")
                curUV.css("color","white")
            }
            if(data2.current.uvi > 11 ){
                curUV.css("background-color","purple")
            }

            // Day 1 Temperature
            $("#day1").text(moment.unix(data2.daily[1].dt).format("M/DD/YYYY"))
            $("#day1img").attr("src", "https://openweathermap.org/img/wn/" + data2.daily[1].weather[0].icon + ".png" )
            $("#day1temp").text(data2.daily[1].temp.max)
            $("#day1wind").text(data2.daily[1].wind_speed)
            $("#day1humi").text(data2.daily[1].humidity)

            // Day 2 Temperature
            $("#day2").text(moment.unix(data2.daily[2].dt).format("M/DD/YYYY"))
            $("#day2img").attr("src", "https://openweathermap.org/img/wn/" + data2.daily[2].weather[0].icon + ".png" )
            $("#day2temp").text(data2.daily[2].temp.max)
            $("#day2wind").text(data2.daily[2].wind_speed)
            $("#day2humi").text(data2.daily[2].humidity)

            // Day 3 Temperature
            $("#day3").text(moment.unix(data2.daily[3].dt).format("M/DD/YYYY"))
            $("#day3img").attr("src", "https://openweathermap.org/img/wn/" + data2.daily[3].weather[0].icon + ".png" )
            $("#day3temp").text(data2.daily[3].temp.max)
            $("#day3wind").text(data2.daily[3].wind_speed)
            $("#day3humi").text(data2.daily[3].humidity)

            // Day 4 Temperature
            $("#day4").text(moment.unix(data2.daily[4].dt).format("M/DD/YYYY"))
            $("#day4img").attr("src", "https://openweathermap.org/img/wn/" + data2.daily[4].weather[0].icon + ".png" )
            $("#day4temp").text(data2.daily[4].temp.max)
            $("#day4wind").text(data2.daily[4].wind_speed)
            $("#day4humi").text(data2.daily[4].humidity)
            
            // Day 5 Temperature
            $("#day5").text(moment.unix(data2.daily[5].dt).format("M/DD/YYYY"))
            $("#day5img").attr("src", "https://openweathermap.org/img/wn/" + data2.daily[5].weather[0].icon + ".png" )
            $("#day5temp").text(data2.daily[5].temp.max)
            $("#day5wind").text(data2.daily[5].wind_speed)
            $("#day5humi").text(data2.daily[5].humidity)


})})}
