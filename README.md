# ✈️ METAR & TAF Weather App

This is a browser-based aviation weather app that fetches real-time **METAR** and **TAF** reports using the [CheckWX API](https://www.checkwx.com/). Users can input an ICAO airport code (like `KJFK`, `KLAX`, `EGLL`) and instantly receive decoded aviation weather data, including forecasts, temperature, visibility, wind, and cloud cover.

## 🌤️ What Are METAR & TAF?

- **METAR**: Meteorological Aerodrome Report – real-time observed weather conditions.
- **TAF**: Terminal Aerodrome Forecast – short-term weather forecast for airports.

## ⚙️ Features

- ✅ User inputs any valid **ICAO** airport code
- 🔍 Fetches and decodes both **TAF** and **METAR** reports
- 📋 Displays:
  - Raw TAF/METAR text
  - Wind direction and speed
  - Temperature (°C and °F)
  - Visibility
  - Cloud coverage (type & altitude)
  - TAF issue time and valid period
- 🔐 Uses a secure API key header to access CheckWX

## 🖥️ Live Demo

*(Optional: Add GitHub Pages/Replit/Vercel/Netlify link if you deploy it)*

## 🚀 How to Use

1. Open the app in your browser.
2. Enter a valid **ICAO airport code** in the input box (e.g. `KJFK` for New York JFK).
3. Press "Submit" or run the `getTafMetar()` function.
4. Weather data will appear below the input field.

## 🧩 Technologies Used

- HTML5 + CSS3 (basic UI)
- JavaScript (Fetch API)
- [CheckWX API](https://www.checkwx.com/) (TAF/METAR data)

## 🔐 API Key

This project uses a **free API key** from CheckWX. You'll need to register at [checkwx.com](https://www.checkwx.com/signup) to get your own API key.

```js
const apiKey = "YOUR_API_KEY_HERE";
