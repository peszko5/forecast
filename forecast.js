window.onload = function () {
    // var showForecast = document.getElementById('forecastLocal');
    var cityName = document.getElementById('cityNameInfo');
    var cityInfo = document.getElementById('infoAboutCity');
    var temperature = document.getElementById('tempInfo');
    var percipitation = document.getElementById('rainChance');
    var wind = document.getElementById('windSpeed');

    loadForecast();



    function loadForecast() {

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?lat=49.8810900&lon=20.0893600&APPID=03a706d4e9b3ce5dd1105d1704fa5835'
        })
            .done(function (res) {


                cityName.innerHTML = res.city.name;

                for (i = 0; i < res.list.length; i++) {
                    cityInfo.innerHTML = res.list[0].dt_txt;
                    temperature.innerHTML = Math.round(res.list[0].main.temp - 273.15);
                    percipitation.innerHTML = res.list[0].main.humidity + '% humidity';
                    wind.innerHTML = res.list[0].wind.speed + ' km/h';
                }




            });
    }
}