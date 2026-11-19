const weatherForm = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");

weatherForm.addEventListener("submit", (event)=>{
  event.preventDefault();

  const city = locationInput.value;
  console.log("You searched for", city);
})