window.onload = function () {
    var showForecast = document.getElementById('forecastLocal');
    loadForecast();
    function loadForecast() {
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?lat=49.8810900&lon=20.0893600&APPID=03a706d4e9b3ce5dd1105d1704fa5835'
        })
            .done(function (res) {
                for (i = 0; i < res.list.length; i++) {
                    var nextFor = document.createElement('li');
                    nextFor.innerHTML = res.list[i].dt_txt + ": " + res.city.name;
                    showForecast.appendChild(nextFor);
                }
            });
    }
}