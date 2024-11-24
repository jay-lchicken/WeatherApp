document.getElementById("submit").onclick = () => {
    const city = document.getElementById("city").value;
    const apiKey = '5594cfe3026a44d6abb123240240210';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById("weather");
            weatherDiv.innerHTML = ''; // Clear previous data

            const weatherData = `
    <p class="weather-data">Dewpoint (C): ${data.current.dewpoint_c}</p>
    <p class="weather-data">Dewpoint (F): ${data.current.dewpoint_f}</p>
    <p class="weather-data">Feels Like (C): ${data.current.feelslike_c}</p>
    <p class="weather-data">Feels Like (F): ${data.current.feelslike_f}</p>
    <p class="weather-data">Gust (kph): ${data.current.gust_kph}</p>
    <p class="weather-data">Gust (mph): ${data.current.gust_mph}</p>
    <p class="weather-data">Heat Index (C): ${data.current.heatindex_c}</p>
    <p class="weather-data">Heat Index (F): ${data.current.heatindex_f}</p>
    <p class="weather-data">Humidity: ${data.current.humidity}</p>
    <p class="weather-data">Is Day: ${data.current.is_day}</p>
    <p class="weather-data">Last Updated: ${data.current.last_updated}</p>
    <p class="weather-data">Precipitation (in): ${data.current.precip_in}</p>
    <p class="weather-data">Precipitation (mm): ${data.current.precip_mm}</p>
    <p class="weather-data">Pressure (in): ${data.current.pressure_in}</p>
    <p class="weather-data">Pressure (mb): ${data.current.pressure_mb}</p>
    <p class="weather-data">Temperature (C): ${data.current.temp_c}</p>
    <p class="weather-data">Temperature (F): ${data.current.temp_f}</p>
    <p class="weather-data">UV Index: ${data.current.uv}</p>
    <p class="weather-data">Visibility (km): ${data.current.vis_km}</p>
    <p class="weather-data">Visibility (miles): ${data.current.vis_miles}</p>
    <p class="weather-data">Wind Degree: ${data.current.wind_degree}</p>
    <p class="weather-data">Wind Direction: ${data.current.wind_dir}</p>
    <p class="weather-data">Wind (kph): ${data.current.wind_kph}</p>
    <p class="weather-data">Wind (mph): ${data.current.wind_mph}</p>
    <p class="weather-data">Wind Chill (C): ${data.current.windchill_c}</p>
    <p class="weather-data">Wind Chill (F): ${data.current.windchill_f}</p>
`;
            weatherDiv.innerHTML = weatherData;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
};