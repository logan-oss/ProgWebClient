ville = JSON.parse(sessionStorage.getItem("ville"));
apiKey ="2c5d33f5474d095e223628e31f232edf";

window.addEventListener("load", function(){
 // ---- récupération des mesures météorologique ---- //
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ville.nom+"&appid="+apiKey+"&units=metric",{
    method : 'get'
  }).then(response => response.json())
  .then(weather => setInfoWeather(weather))
  .catch(function(err){
    alert(err);
  });

function setInfoWeather(weather){
  console.log(weather);
  let weatherDescr = weather.weather[0].description;
  let weatherType = fewClouds;
  switch (weatherDescr) {
    case "clear sky":
      weatherType = clear;
      break;
    case "few clouds":
      weatherType = fewClouds;
      break;
    case "scattered clouds":
      weatherType = scatteredClouds;
      break;
    case "broken clouds":
      weatherType = scatteredClouds;
      break;
    case "shower rain":
      weatherType = thunderstorm;
      break;
    case "rain":
      weatherType = rain;
      break;
    case "thunderstorm":
      weatherType = tempete;
      break;
    case "snow":
      weatherType = snow;
      break;
    case "mist":
      weatherType = mist;
      break;

  }
  document.getElementById('image-weather').innerHTML = weatherType;
  document.getElementById("ville").innerHTML = ville.nom;
  document.getElementById("ressenti").innerHTML = "Ressenti : " + weather.main.feels_like+ "°C";
  document.getElementById("humidite").innerHTML = "Humidité : " + weather.main.humidity+ "%";
  document.getElementById("temp").innerHTML = "Température  : " + weather.main.temp+ "°C";
  document.getElementById("tempMax").innerHTML = "Température maximale : " + weather.main.temp_max+ "°C";
  document.getElementById("tempMin").innerHTML = "Température minimale : " + weather.main.temp_min+ "°C";
}

});
