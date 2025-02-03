# 🌤️ Weather App

A simple and **responsive** weather application that fetches real-time weather data using the **Weather API** and displays it in a modern UI.

## 📌 Features
- 🌎 **Search by City** - Get weather data for any city.
- 🌡️ **Accurate Weather Data** - Displays temperature, location, and weather conditions.
- 🎨 **Modern Glassmorphism UI** - Aesthetic and easy-to-use interface.
- 📱 **Fully Responsive** - Works on all devices.

---

## 🚀 Getting Started

### 📥 Prerequisites
Ensure you have the following installed:
- A web browser (Chrome, Firefox, Edge, etc.)
- Internet connection (for fetching API data)

### 🔧 Installation & Running the Project Locally
1. **Clone the repository**  
   ```sh
   git clone https://github.com/nishtha-902/weather-app.git
   ```
Navigate into the project folder
```sh
cd weather-app
```
Open the project in a browser
You can simply double-click on index.html

🛠️ Project Approach
🌟 1. Breaking Down the Project
The project was initially built in React, which required conversion to a standard HTML, CSS, and JavaScript setup. The main components were:

API Calls (api.js) → Converted to a standalone script.js file.
React Components (Card, Button, Input) → Rewritten as HTML elements with JavaScript event listeners.
React State Management (WeatherContext) → Replaced with vanilla JavaScript variables.
🔥 2. Challenges & Solutions
1. State Management Without React
Challenge: React's useState made it easy to update UI dynamically.
Solution: Used global variables and event listeners to achieve the same functionality.
2. Fetching & Displaying Weather Data
Challenge: Handling asynchronous API calls and updating UI dynamically.
Solution: Used async/await with proper error handling to ensure a smooth user experience.
3. Making the UI Attractive & Responsive
Challenge: The original UI was basic and not mobile-friendly.
Solution: Implemented:
Glassmorphism Design for a modern feel.
CSS Media Queries to ensure responsiveness on all devices.
Hover Effects & Transitions for better interactivity.

🙌 Contributing
Feel free to fork the repository and submit pull requests! 🚀

📜 License
This project is licensed under the MIT License.
