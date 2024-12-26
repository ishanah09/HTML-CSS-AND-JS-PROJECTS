let inputEl = document.querySelector("#input");
let searchBtn = document.querySelector("#search-button");
let errorEl = document.querySelector("#error");
let weatherIcon = document.querySelector("#weatherIcon");
let temperatureEl = document.querySelector("#temperature");
let placeEl = document.querySelector("#place");
let humidityEl = document.querySelector("#humidity");
let windEl = document.querySelector("#wind");
let weatherDetailsEl = document.querySelector("#weather-details");

searchBtn.addEventListener("click", renderData);
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "05d44372a7d08c3eca8fd05b5f8e6bcc";

async function renderData() {
  let inputValue = inputEl.value;
  let response = await fetch(url + inputValue + `&appid=${apiKey}`);
  let data = await response.json();

  try {
    if (data.message == "city not found") {
      errorEl.innerHTML = "invalid city name";
      errorEl.classList.remove("hide");

      inputEl.value = "";
      weatherDetailsEl.classList.add("hide");
    } else {
      weatherDetailsEl.classList.remove("hide");
      errorEl.classList.add("hide");
      let temperature = Math.round(data.main.temp - 273.15);

      temperatureEl.innerHTML = temperature;
      placeEl.innerHTML = `${data.name}`;
      humidityEl.innerHTML = `${data.main.humidity}`;
      windEl.innerHTML = data.wind.speed;

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
      } else {
        weatherIcon.src = "images/drizzle.png";
      }

      inputEl.value = "";
      console.log(data);
      console.log(data.weather[0].main);
    }
  } catch (error) {
    console.log(error);
  }
}
