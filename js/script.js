 // Luanda
    //https://api.openweathermap.org/data/2.5/onecall?lat=-8.8368200&lon=13.2343200&units=metric&exclude=minutely,alerts&appid=6c55e8395c583956a1084ea91d2a0d3b
   

    // benguela
    //https://api.openweathermap.org/data/2.5/onecall?lat=-12.375729&lon=-12.375729&units=metric&exclude=minutely,alerts&appid=6c55e8395c583956a1084ea91d2a0d3b
    
    // huambo
    //https://api.openweathermap.org/data/2.5/onecall?lat=-12.766667&lon=15.733333&units=metric&exclude=minutely,alerts&appid=6c55e8395c583956a1084ea91d2a0d3b
    
    // cabinda
    //https://api.openweathermap.org/data/2.5/onecall?lat=-5.55654900&lon=12.18984000&units=metric&exclude=minutely,alerts&appid=6c55e8395c583956a1084ea91d2a0d3b
    
    // cuito
    //https://api.openweathermap.org/data/2.5/onecall?lat=-15.166667&lon=19.166667&units=metric&exclude=minutely,alerts&appid=6c55e8395c583956a1084ea91d2a0d3b




  //  API call
  let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
  let lat = "lat=-8.8368200&";
  let lon = "lon=13.2343200&";
  let apiOptions = "units=metric&exclude=minutely,alerts&";
  let apiKey = "appid=6c55e8395c583956a1084ea91d2a0d3b";
  let file = queryUrl + lat + lon + apiOptions + apiKey;
  
  fetch(file)
  .then((response)=>response.json())
  .then((data)=>{
  // console.log(data.current.temp);
  console.log(data);
  
  // Weather main data
  let main = data.current.weather[0].main;
  let description = data.current.weather[0].description;
  let temp = Math.round(data.current.temp);
  let pressure = data.current.pressure;
  let humidity = data.current.humidity;
  let name ="Luanda";
  
  document.getElementById("wrapper-description").innerHTML = description;
  document.getElementById("wrapper-temp").innerHTML = temp + "ºC";
  document.getElementById("wrapper-pressure").innerHTML = pressure;
  document.getElementById("wrapper-humidity").innerHTML = humidity + "ºC";
  document.getElementById("wrapper-name").innerHTML = name;
  
  
  // Weather hourly data
  let hourNow = data.hourly[0].temp;
  let hour1 = data.hourly[1].temp;
  let hour2 = data.hourly[2].temp;
  let hour3 = data.hourly[3].temp;
  let hour4 = data.hourly[4].temp;
  let hour5 = data.hourly[5].temp;
  
  document.getElementById("wrapper-hour-now").innerHTML = hourNow + "º";
  document.getElementById("wrapper-hour1").innerHTML = hour1 + "º";
  document.getElementById("wrapper-hour2").innerHTML = hour2 + "º";
  document.getElementById("wrapper-hour3").innerHTML = hour3 + "º";
  document.getElementById("wrapper-hour4").innerHTML = hour4 + "º";
  document.getElementById("wrapper-hour5").innerHTML = hour5 + "º";
  
  
  // Time
  let timeNow = new Date().getHours();
  // let time1 = timeNow + 1;
  let time1 = timeNow;
  let time2 = time1 + 1;
  let time3 = time2 + 1;
  let time4 = time3 + 1;
  let time5 = time4 + 1;
  
  document.getElementById("wrapper-time1").innerHTML = time1;
  document.getElementById("wrapper-time2").innerHTML = time2;
  document.getElementById("wrapper-time3").innerHTML = time3;
  document.getElementById("wrapper-time4").innerHTML = time4;
  document.getElementById("wrapper-time5").innerHTML = time5;
  
  // Wheather daily data
  let tomorrowTemp = Math.round(data.daily[0].temp.day);
  let dATTemp = Math.round(data.daily[1].temp.day);
  let tomorrowMain = data.daily[0].weather[0].main;
  let dATTempMain = data.daily[1].weather[0].main;
  
  document.getElementById("wrapper-forecast-temp-today").innerHTML = temp + "ºC";
  document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML = tomorrowTemp + "ºC";
  document.getElementById("wrapper-forecast-temp-dAT").innerHTML = dATTemp + "ºC";
  
  // Icons
  
  let iconBaseUrl = "http://openweathermap.org/img/wn/";
  let iconFormat = ".png";
  
  // Hoje
  let iconCodeToday = data.current.weather[0].icon;
  let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
  document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;
  
  // Amanha
  let iconCodeTomorrow = data.daily[0].weather[0].icon;
  let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
  document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;
  
  // depois de Amanha
  let iconCodedAT = data.daily[1].weather[0].icon;
  let iconFullyUrldAT = iconBaseUrl + iconCodedAT + iconFormat;
  document.getElementById("wrapper-icon-dAT").src = iconFullyUrldAT;
  
  // Icons hourly
  
  // Hour now
  let iconHourNow = data.hourly[0].weather[0].icon;
  let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
  document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlHourNow;
  
  // Hour1
  let iconHour1 = data.hourly[1].weather[0].icon;
  let iconFullyUrl1 = iconBaseUrl + iconHour1 + iconFormat;
  document.getElementById("wrapper-icon-hour1").src = iconFullyUrl1;
  
  // Hour2
  let iconHour2 = data.hourly[2].weather[0].icon;
  let iconFullyUrl2 = iconBaseUrl + iconHour2 + iconFormat;
  document.getElementById("wrapper-icon-hour2").src = iconFullyUrl2;
  
  // Hour3
  let iconHour3 = data.hourly[3].weather[0].icon;
  let iconFullyUrl3 = iconBaseUrl + iconHour3 + iconFormat;
  document.getElementById("wrapper-icon-hour3").src = iconFullyUrl3;
  
  // Hour4
  let iconHour4 = data.hourly[4].weather[0].icon;
  let iconFullyUrl4 = iconBaseUrl + iconHour4 + iconFormat;
  document.getElementById("wrapper-icon-hour4").src = iconFullyUrl4;
  
  // Hour5
  let iconHour5 = data.hourly[5].weather[0].icon;
  let iconFullyUrl5 = iconBaseUrl + iconHour5 + iconFormat;
  document.getElementById("wrapper-icon-hour5").src = iconFullyUrl5;
  
  // main = "Fog";
  
  // Backgronds
  switch (main ) {
    case "Snow":
    document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
      break;
    case "Clouds":
    document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
      break;
    case "Fog":
    document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
      break;
    case "Rain":
    document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
      break;
    case "Thunderstorm":
    document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
      break;
  
  
    default:
    document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
      break;
  }
  
  });