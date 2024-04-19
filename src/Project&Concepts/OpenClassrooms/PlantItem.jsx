import "./styles/plantItem.css";
import CareScale from "./CareScale";

const PlantItem = ({ id, cover, name, water, light }) => {
  function handleClick(e) {
    console.log(e);
  }

  return (
    <li key={id} className="lmj-plant-item" onClick={handleClick}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;
