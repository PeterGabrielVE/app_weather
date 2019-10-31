import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

function App() {
  return (
    <div className="App">
        <WeatherLocation city={"Barquisimeto"}></WeatherLocation>
    </div>
  );
}

export default App;
