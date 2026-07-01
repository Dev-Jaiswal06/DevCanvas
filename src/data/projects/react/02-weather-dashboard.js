const project = {
  id: 22,
  title: "Weather Dashboard",
  description: "Build a weather dashboard that fetches real-time weather data using the OpenWeatherMap API",
  difficulty: "Intermediate",
  category: "react",
  duration: "2.5 hours",
  order: 21,
  requirements: [
    "City search input to look up weather by city name",
    "Display current temperature, humidity, wind speed, and weather description",
    "Show weather icon based on current conditions",
    "5-day forecast with daily temperature and conditions",
    "Error handling for invalid city names or API failures",
    "Responsive design that works on mobile and desktop",
  ],
  steps: [
    {
      title: "Setup React Project",
      description: "Create a new React project and install necessary dependencies. Set up the project structure with components folder.",
      code: "// terminal\n// npm install react react-dom\n\n// Folder structure:\n// src/\n//   App.jsx\n//   components/\n//     SearchBar.jsx\n//     CurrentWeather.jsx\n//     Forecast.jsx\n//   App.css",
    },
    {
      title: "Build SearchBar Component",
      description: "Create a search bar component that accepts city name input and triggers API call on submit",
      code: 'import React, { useState } from "react";\n\nexport default function SearchBar({ onSearch }) {\n  const [city, setCity] = useState("");\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (city.trim()) {\n      onSearch(city.trim());\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="text"\n        value={city}\n        onChange={(e) => setCity(e.target.value)}\n        placeholder="Enter city name..."\n      />\n      <button type="submit">Search</button>\n    </form>\n  );\n}',
    },
    {
      title: "Build CurrentWeather Component",
      description: "Create a component to display current weather data with temperature, conditions, and icon",
      code: 'import React from "react";\n\nexport default function CurrentWeather({ data }) {\n  if (!data) return null;\n\n  const { main, weather, wind, name, sys } = data;\n  const iconUrl = "https://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png";\n\n  return (\n    <div className="current-weather">\n      <div className="weather-header">\n        <div>\n          <h2>{name}, {sys.country}</h2>\n          <p className="temp">{Math.round(main.temp)}°C</p>\n          <p>Feels like {Math.round(main.feels_like)}°C</p>\n        </div>\n        <div className="weather-icon">\n          <img src={iconUrl} alt={weather[0].description} />\n          <p className="description">{weather[0].description}</p>\n        </div>\n      </div>\n      <div className="weather-details">\n        <div>Humidity: {main.humidity}%</div>\n        <div>Wind: {wind.speed} m/s</div>\n        <div>Pressure: {main.pressure} hPa</div>\n      </div>\n    </div>\n  );\n}',
    },
    {
      title: "Build Forecast Component",
      description: "Create a 5-day forecast component showing daily temperature ranges",
      code: 'import React from "react";\n\nexport default function Forecast({ data }) {\n  if (!data || data.length === 0) return null;\n\n  const getDayName = (timestamp) => {\n    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];\n    return days[new Date(timestamp * 1000).getDay()];\n  };\n\n  return (\n    <div className="forecast">\n      <h3>5-Day Forecast</h3>\n      <div className="forecast-grid">\n        {data.slice(0, 5).map((day, i) => (\n          <div key={i} className="forecast-card">\n            <p className="day">{getDayName(day.dt)}</p>\n            <img\n              src={"https://openweathermap.org/img/wn/" + day.weather[0].icon + ".png"}\n              alt={day.weather[0].description}\n            />\n            <p className="temp-range">\n              {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°\n            </p>\n            <p className="condition">{day.weather[0].main}</p>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}',
    },
    {
      title: "Build Main App Component",
      description: "Create the main App component that ties everything together with API integration",
      code: 'import React, { useState, useEffect } from "react";\nimport SearchBar from "./components/SearchBar";\nimport CurrentWeather from "./components/CurrentWeather";\nimport Forecast from "./components/Forecast";\nimport "./App.css";\n\nconst API_KEY = "YOUR_API_KEY";\nconst BASE_URL = "https://api.openweathermap.org/data/2.5";\n\nexport default function App() {\n  const [city, setCity] = useState("London");\n  const [current, setCurrent] = useState(null);\n  const [forecast, setForecast] = useState(null);\n  const [error, setError] = useState(null);\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    fetchWeather(city);\n  }, [city]);\n\n  const fetchWeather = async (cityName) => {\n    setLoading(true);\n    setError(null);\n    try {\n      const [currentRes, forecastRes] = await Promise.all([\n        fetch(BASE_URL + "/weather?q=" + cityName + "&appid=" + API_KEY + "&units=metric"),\n        fetch(BASE_URL + "/forecast?q=" + cityName + "&appid=" + API_KEY + "&units=metric"),\n      ]);\n\n      if (!currentRes.ok || !forecastRes.ok) {\n        throw new Error("City not found");\n      }\n\n      const currentData = await currentRes.json();\n      const forecastData = await forecastRes.json();\n\n      setCurrent(currentData);\n\n      const dailyForecast = forecastData.list.filter((item) =>\n        item.dt_txt.includes("12:00:00")\n      );\n      setForecast(dailyForecast);\n    } catch (err) {\n      setError(err.message);\n      setCurrent(null);\n      setForecast(null);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  return (\n    <div className="app">\n      <h1>Weather Dashboard</h1>\n      <SearchBar onSearch={setCity} />\n      {loading && <p className="loading">Loading...</p>}\n      {error && <p className="error">Error: " + error + "</p>}\n      <CurrentWeather data={current} />\n      <Forecast data={forecast} />\n    </div>\n  );\n}',
    },
  ],
  starterCode: {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Weather Dashboard</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>',
    css: "",
    js: 'import React, { useState } from "react";\nimport { createRoot } from "react-dom/client";\n\nfunction App() {\n  return <h1>Weather Dashboard</h1>;\n}\n\ncreateRoot(document.getElementById("root")).render(<App />);',
  },
  completedCode: {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Weather Dashboard</title>\n  <link rel="stylesheet" href="styles.css" />\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>',
    css: "",
    js: 'import React, { useState, useEffect } from "react";\nimport { createRoot } from "react-dom/client";\n\nconst API_KEY = "YOUR_API_KEY";\nconst BASE_URL = "https://api.openweathermap.org/data/2.5";\n\nfunction SearchBar({ onSearch }) {\n  const [city, setCity] = useState("");\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (city.trim()) onSearch(city.trim());\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city..." />\n      <button type="submit">Search</button>\n    </form>\n  );\n}\n\nfunction CurrentWeather({ data }) {\n  if (!data) return null;\n  const { main, weather, wind, name, sys } = data;\n  const iconUrl = "https://openweathermap.org/img/wn/" + weather[0].icon + "@2x.png";\n  return (\n    <div>\n      <h2>{name}, {sys.country}</h2>\n      <img src={iconUrl} alt={weather[0].description} />\n      <h1>{Math.round(main.temp)}°C</h1>\n      <p>{weather[0].description}</p>\n      <p>Humidity: {main.humidity}% | Wind: {wind.speed} m/s</p>\n    </div>\n  );\n}\n\nfunction Forecast({ data }) {\n  if (!data) return null;\n  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];\n  return (\n    <div>\n      <h3>5-Day Forecast</h3>\n      {data.map((d, i) => (\n        <div key={i}>\n          <p>{days[new Date(d.dt * 1000).getDay()]}</p>\n          <img src={"https://openweathermap.org/img/wn/" + d.weather[0].icon + ".png"} alt="" />\n          <p>{Math.round(d.temp.max)}° / {Math.round(d.temp.min)}°</p>\n        </div>\n      ))}\n    </div>\n  );\n}\n\nfunction App() {\n  const [city, setCity] = useState("London");\n  const [current, setCurrent] = useState(null);\n  const [forecast, setForecast] = useState(null);\n  const [error, setError] = useState(null);\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    const fetchWeather = async () => {\n      setLoading(true);\n      setError(null);\n      try {\n        const [curRes, forRes] = await Promise.all([\n          fetch(BASE_URL + "/weather?q=" + city + "&appid=" + API_KEY + "&units=metric"),\n          fetch(BASE_URL + "/forecast?q=" + city + "&appid=" + API_KEY + "&units=metric"),\n        ]);\n        if (!curRes.ok || !forRes.ok) throw new Error("City not found");\n        setCurrent(await curRes.json());\n        const forecastData = await forRes.json();\n        setForecast(forecastData.list.filter((item) => item.dt_txt.includes("12:00:00")));\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    };\n    fetchWeather();\n  }, [city]);\n\n  return (\n    <div>\n      <h1>Weather Dashboard</h1>\n      <SearchBar onSearch={setCity} />\n      {loading && <p>Loading...</p>}\n      {error && <p>{error}</p>}\n      <CurrentWeather data={current} />\n      <Forecast data={forecast} />\n    </div>\n  );\n}\n\ncreateRoot(document.getElementById("root")).render(<App />);',
  },
  screenshots: [],
  demoUrl: "",
  resources: [
    { title: "OpenWeatherMap API", url: "https://openweathermap.org/api" },
    { title: "React useEffect Hook", url: "https://react.dev/reference/react/useEffect" },
    { title: "Working with API Keys", url: "https://react.dev/learn/keeping-components-pure" },
  ],
  xp: 300,
};

export default project;
