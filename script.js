async function getWeather() {
const city = document.getElementById("city").value.trim();
const message = document.getElementById("message");
const weather = document.getElementById("weather");

```
if (city === "") {
    message.innerText = "Please enter a city name!";
    weather.style.display = "none";
    return;
}

const key = "YOUR_API_KEY";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${key}&units=metric`;

try {
    message.innerText = "Loading...";
    weather.style.display = "none";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("City not found or API request failed!");
    }

    const data = await response.json();

    document.getElementById("name").innerText =
        "City: " + data.name;

    document.getElementById("temp").innerText =
        "Temperature: " + data.main.temp + " °C";

    document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";

    document.getElementById("condition").innerText =
        "Condition: " + data.weather[0].description;

    message.innerText = "";
    weather.style.display = "block";

} catch (error) {
    message.innerText = error.message;
    weather.style.display = "none";
}
```

}
