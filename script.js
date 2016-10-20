var unit = 'f';

 $(document).ready(function() {
  getCoOrdinates('f');
 });

 function getCoOrdinates(unit){
   $.getJSON('http://ipinfo.io', function(data){
     var lat = data.loc.split(',')[0];
     var long = data.loc.split(',')[1];

       add = "http://api.wunderground.com/api/3ab6e3c2b08b8f92/conditions/q/"+ lat + "," + long + ".json";

       $.get(add,
      function(data){
        place = data.current_observation.display_location.city + ", " + data.current_observation.display_location.country ;
       document.getElementById("location").innerHTML = place;

       loadWeather(place, unit);

      });

});
 };

function loadWeather(location, unit) {
 $.simpleWeather({
  location: location,
   woeid: '',
   unit: unit,
   success: function(weather) {
     html = '<p>'+weather.temp+' &deg;'+ unit.toUpperCase() + '</p>';
     $("#temp").html(html);

     img = '<img src="img/' + weather.code + '.svg" />';
     $(".climate_bg").html(img);
     $(".text").html(weather.text);
   },
   error: function(error) {
     $(".text").html('<p>'+error+'</p>');
   }
 });
 }


function changeUnit() {

  if (unit == 'f') {
  unit = 'c';
  getCoOrdinates(unit);
  }
  else if (unit == 'c') {
  unit = 'f';
  getCoOrdinates(unit);
  }
};
