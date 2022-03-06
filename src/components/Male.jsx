import { useContext } from "react";
import SettingContext from "../SettingContext";
import Popup from "reactjs-popup";

const Male = () => {
  const contextHarryMale = useContext(SettingContext);

  return (
    <div className="container-male">
      <p className="header-text">Men from the Harry Potter movie</p>
      {contextHarryMale.harryPotterData.map((item, index) => {
        if (item.image === "") {
          return <></>;
        }

        if (item.gender === "male") {
          return (
            <div key={index} className="image-container">
              <p className="name-text">{item.name}</p>
              <img src={item.image} alt=""></img>
              <Popup
                trigger={<button id="popbtn"> More info </button>}
                position="left center"
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
        }

        return <div></div>;
      })}
    </div>
  );
};

export default Male;
