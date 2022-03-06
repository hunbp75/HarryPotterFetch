import { useContext } from "react";
import SettingContext from "../SettingContext";

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
            </div>
          );
        }

        return <div></div>;
      })}
    </div>
  );
};

export default Male;
