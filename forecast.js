window.onload = function () {
     var showForecast = document.getElementById('forecastLocal');
     var cityName = document.getElementById('cityNameInfo');
     var cityInfo = document.getElementById('infoAboutCity');
     var temperature = document.getElementById('tempInfo');
     var percipitation = document.getElementById('rainChance');
     var wind = document.getElementById('windSpeed');
      var body = document.getElementById('body');

     loadForecast();
    // newCard();


    function loadForecast() {

         $.ajax({
             url: 'https:api.openweathermap.org/data/2.5/forecast?lat=49.8810900&lon=20.0893600&APPID=03a706d4e9b3ce5dd1105d1704fa5835'
         })
             .done(function (res) {
//                  cityName.innerHTML = res.city.name;

                  for (i = 0; i < res.list.length; i++) {
                      newCard(res.list[i]);
                    //    cityInfo.innerHTML = res.list[0].dt_txt;
                    //    temperature.innerHTML = Math.round(res.list[0].main.temp - 273.15);
                    //    percipitation.innerHTML = res.list[0].main.humidity + '% humidity';
                    //    wind.innerHTML = res.list[0].wind.speed + ' km/h';
                  }




              });
      }

    function newCard(data) {
        var mainDiv = $('<div></div>');
        mainDiv.addClass('card weather-card');
        mainDiv.css({ 'width': '30%' });

        var divInMainDiv = $('<div></div>');
        divInMainDiv.addClass('card-body pb-3');
        //divInMainDiv.css({ 'background': 'red', 'width':'50%', 'height':'7%'});
        divInMainDiv.appendTo(mainDiv);

        var cityName = $('<h4></h4>');
        cityName.addClass('card-title font-weight-bold');
        cityName.attr('id','cityNameInfo');
        cityName.appendTo(divInMainDiv);

        var pDateInfo = $(`<p>${data.dt_txt}</p>`);
        pDateInfo.addClass('card-text');
        pDateInfo.attr('id','infoAboutCity');
        pDateInfo.appendTo(divInMainDiv);

        var logoDiv = $('<div></div>');
        logoDiv.addClass('d-flex justify-content-between');
        logoDiv.appendTo(divInMainDiv);

        var pInLogoDiv = $('<p></p>');
        pInLogoDiv.addClass('display-1 degree');
        pInLogoDiv.attr('id','tempInfo');
        pInLogoDiv.appendTo(logoDiv);

        var iInLogoDiv = $('<i></i>');
        iInLogoDiv.addClass('fas fa-sun-o fa-5x pt-3 amber-text');
        iInLogoDiv.appendTo(logoDiv);

        var infoDiv = $('<div></div>');
        logoDiv.addClass('d-flex justify-content-between mb-4');
        infoDiv.appendTo(divInMainDiv);

        var pInInfoDivOne = $('<p></p>');
        pInInfoDivOne.appendTo(infoDiv);

        var rainInfo = $('<i></i>');
        rainInfo.addClass('fas fa-tint fa-lg text-info pr-2');
        rainInfo.attr('id','rainChance');
        rainInfo.appendTo(pInInfoDivOne);

        var pInInfoDivTwo = $('<p></p>');
        pInInfoDivTwo.appendTo(infoDiv);

        var windInfo = $('<i></i>');
        windInfo.addClass('fas fa-leaf fa-lg grey-text pr-2');
        windInfo.attr('id','windChance');
        windInfo.appendTo(pInInfoDivTwo);
        
        mainDiv.appendTo($(body));
    }
}