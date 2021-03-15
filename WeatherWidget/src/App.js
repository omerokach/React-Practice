import "./App.css";
import WeatherWidget from "./components/WeatherWidget";
import sunny from "./images/sunny.png";
import partly_cloudy from "./images/partly_cloudy.png";
import './weatherComponents.css'

const weatherArray = [
  {
    day: "Sunday",
    type: sunny,
    minTemperature: "20",
    maxTemperature: "30",
  },
  {
    day: "Monday",
    type: partly_cloudy,
    minTemperature: "20",
    maxTemperature: "30",
  },
  {
    day: "Tuesday",
    type: sunny,
    minTemperature: "20",
    maxTemperature: "30",
  },
  {
    day: "Wednesday",
    type: partly_cloudy,
    minTemperature: "20",
    maxTemperature: "30",
  },
  {
    day: "Thursday",
    type: sunny,
    minTemperature: "20",
    maxTemperature: "30",
  },
  {
    day: "Friday",
    type: partly_cloudy,
    minTemperature: "20",
    maxTemperature: "30",
  },
  {
    day: "Saturday ",
    type: partly_cloudy,
    minTemperature: "20",
    maxTemperature: "30",
  },
];

function App() {
  return (
    <div className="container">
      {weatherArray.map((weather, i) => (
        <WeatherWidget
          key={`weather-key-${i}`}
          day={weather.day}
          type={weather.type}
          minTemperature={`${weather.minTemperature}°`}
          maxTemperature={`${weather.maxTemperature}°`}
        />
      ))}
    </div>
  );
}

export default App;
