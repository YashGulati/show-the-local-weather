var unit = 'f';

 $(document).ready(function() {
  getCoOrdinates('f');
 });

 function getCoOrdinates(unit){
  //  $.getJSON('http://ipinfo.io', function(data){
  //    var place = data["city"] + ", " + data["country"];
  //     document.getElementById("location").innerHTML = place;
  //     loadWeather(place, unit);
  //     });
      // $.get("https://api.ipify.org?format=json", function(response) {
      $.get("https://ipinfo.io/json", function(response) {
    console.log(response.ip);
  })

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
