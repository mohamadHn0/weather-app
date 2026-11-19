async function getWeatherData(location){
  const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}  
    
const weatherForm = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");

weatherForm.addEventListener("submit", (event)=>{
  console.clear();
  event.preventDefault();

  const city = locationInput.value;
  getWeatherData(city);
})