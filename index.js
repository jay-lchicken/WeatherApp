document.getElementById("submit").onclick = () => {
    const city = document.getElementById("city").value;
    const url = `https://api.weatherstack.com/current?access_key=a78d78684d9ba2980db3c17196af0cea&query=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById("weather");
            weatherDiv.innerHTML = ''; // Clear previous data

            const weatherData = `
    <p class="weather-data">Observation Time: ${data.current.observation_time}</p>
<p class="weather-data">Temperature: ${data.current.temperature}</p>
<p class="weather-data">Weather Code: ${data.current.weather_code}</p>
<p class="weather-data">Weather Icons: <img src="${data.current.weather_icons[0]}" alt="Weather Icon"></p>
<p class="weather-data">Weather Descriptions: ${data.current.weather_descriptions[0]}</p>
<p class="weather-data">Wind Speed: ${data.current.wind_speed}</p>
<p class="weather-data">Wind Degree: ${data.current.wind_degree}</p>
<p class="weather-data">Wind Direction: ${data.current.wind_dir}</p>
<p class="weather-data">Pressure: ${data.current.pressure}</p>
<p class="weather-data">Precipitation: ${data.current.precip}</p>
<p class="weather-data">Humidity: ${data.current.humidity}</p>
<p class="weather-data">Cloud Cover: ${data.current.cloudcover}</p>
<p class="weather-data">Feels Like: ${data.current.feelslike}</p>
<p class="weather-data">UV Index: ${data.current.uv_index}</p>
<p class="weather-data">Visibility: ${data.current.visibility}</p>
<p class="weather-data">Is Day: ${data.current.is_day}</p>
`;
            weatherDiv.innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
};