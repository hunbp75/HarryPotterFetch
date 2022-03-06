import { useContext } from "react";
import SettingContext from "../SettingContext";
import "../style.css";

const Female = () => {
  const contextHarryFemale = useContext(SettingContext);

  return (
    <div className="container-female">
      <p className="header-text">Women from the Harry Potter movie</p>
      {contextHarryFemale.harryPotterData.map((item, index) => {
        // ha nincs fénykép, akkor nem jeleniti meg az adatokat
        if (item.image === "") {
          return <></>;
        }
        if (item.gender === "female")
          return (
            <div key={index} className="image-container">
              <p className="name-text">{item.name}</p>
              <img src={item.image} alt=""></img>
            </div>
          );
        return <></>;
      })}
    </div>
  );
};

export default Female;
