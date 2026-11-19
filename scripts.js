async function getWeatherData(location){
  const url=`https://visualcrossing.com${location}?unitGroup=metric`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}  
    
const weatherForm = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");

weatherForm.addEventListener("submit", (event)=>{
  event.preventDefault();

  const city = locationInput.value;
  console.log("You searched for", city);
})