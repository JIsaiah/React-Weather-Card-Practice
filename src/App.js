import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-10} />
      <WeatherCard temp={15} />
      <WeatherCard temp={30} />
    </div>
  );
}

export default App;
