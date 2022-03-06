import { useContext } from "react";
import SettingContext from "../SettingContext";

import Popup from "reactjs-popup";

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
              <img src={item.image} alt=""></img>{" "}
              <Popup
                trigger={<button id="popbtn"> More info </button>}
                position="right center"
              >
                <div className="popup-container">
                  <p>Name: {item.name}</p>
                  <p>Species: {item.species}</p>
                  <p>Date of Birth: {item.dateOfBirth}</p>
                  <p>Eye color: {item.eyeColour}</p>
                  <p>Hair color: {item.hairColour}</p>
                  <p>Actor: {item.actor}</p>
                </div>
              </Popup>
            </div>
          );
        return <></>;
      })}
    </div>
  );
};

export default Female;
