import React from "react";
import Search from "./components/Search/Search";
import WeatherContainer from "./components/WeatherContainer/WeatherContainer";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <div className="container">
          <h1> Get Weather Forecast </h1>
          <Search />
          <WeatherContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
