const apiKey = "0a87e141193cee09909ebe86b60b314f";

function getWeather(){

    const city = document.getElementById("city").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if(data.cod == "404"){
            document.getElementById("weather").innerHTML =
            "<h3>City Not Found</h3>";
            return;
        }

        document.getElementById("weather").innerHTML = `
        <h2>${data.name}</h2>
        <p><b>Temperature:</b> ${data.main.temp} °C</p>
        <p><b>Weather:</b> ${data.weather[0].description}</p>
        <p><b>Humidity:</b> ${data.main.humidity}%</p>
        <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
        `;
    })

    .catch(error=>{
        document.getElementById("weather").innerHTML =
        "<h3>Error fetching data</h3>";
    });

}