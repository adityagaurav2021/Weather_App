const getWeather = (city) => {
  const cityName = document.getElementById("cityName");
  cityName.innerHTML = city;

  async function fetchData() {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b236d46e76msha251c98529b5bdcp1e5617jsnb1248a1b9cc9",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      const temp = document.getElementById("temp");
      const temp2 = document.getElementById("temp2");
      const max_temp = document.getElementById("max_temp");
      const min_temp = document.getElementById("min_temp");
      const cloud_pct = document.getElementById("cloud_pct");
      const feels_like = document.getElementById("feels_like");
      const humidity = document.getElementById("humidity");
      const humidity1 = document.getElementById("humidity1");
      const wind_speed = document.getElementById("wind_speed");
      const wind_speed1 = document.getElementById("wind_speed1");
      const sunrise = document.getElementById("sunrise");
      const sunset = document.getElementById("sunset");
      const wind_degrees = document.getElementById("wind_degrees");

      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      max_temp.innerHTML = data.max_temp;
      min_temp.innerHTML = data.min_temp;
      cloud_pct.innerHTML = data.cloud_pct;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      humidity1.innerHTML = data.humidity;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed1.innerHTML = data.wind_speed;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
      wind_degrees.innerHTML = data.wind_degrees;
    } catch (error) {
      console.error(error);
    }
  }

  async function main() {
    try {
      await fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  main();
};

const submit = document.getElementById("submit");
const cityInput = document.getElementById("city");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeather(city);
});

getWeather("Delhi");
