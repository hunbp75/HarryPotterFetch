import React, { useEffect, useState } from "react";
import SettingContext from "./SettingContext";
import Female from "./components/Female";
import Male from "./components/Male";

function App() {
  const [harryPotterData, setHarryPotterData] = useState([]);

  const fetchHarryApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setHarryPotterData(data);
      });
  };

  useEffect(() => {
    fetchHarryApi("http://hp-api.herokuapp.com/api/characters");
  }, []);

  return (
    <div className="App">
      <SettingContext.Provider value={{ harryPotterData }}>
        <Female />
        <Male />
      </SettingContext.Provider>
    </div>
  );
}

export default App;
