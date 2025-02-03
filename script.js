const apiKey = "e577a99959844aff8ad54548241411"; // Replace with your API key

document.getElementById("searchBtn").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    if (city.length > 0) {
        getWeather(city);
    }
});

document.getElementById("refreshBtn").addEventListener("click", function() {
    location.reload();
});

async function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        showError("Error fetching data. Please check your internet connection.");
    }
}

function displayWeather(data) {
    if (data.error) {
        showError("City not found. Please try again.");
        return;
    }

    document.getElementById("temperature").textContent = `${data.current.temp_c}°C`;
    document.getElementById("location").textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    document.getElementById("weather-icon").src = data.current.condition.icon;
    document.getElementById("weather-data").classList.remove("hidden");
    document.getElementById("error-message").classList.add("hidden");
}

function showError(message) {
    document.getElementById("error-message").textContent = message;
    document.getElementById("error-message").classList.remove("hidden");
    document.getElementById("weather-data").classList.add("hidden");
}

