import React  from "react";
import "../styles/Card.css";
import CardItems from "./CardItems";

function Card(props) {
  return (
    <div className="card-outline">
      <div className="card-img__wrapper">
        <img src={props.image} alt={props.alt}></img>
      </div>
      <CardItems
        Name={props.name}
        Price={props.price}
        clickMinus= {props.clickonMinus}
        clickPlus= {props.clickonPlus}
        inputPlaceHolderValue= {props.inputDisplayValue}
        changedInput={props.inputChanged}
      />
      <CardItems
        Name={props.name2}
        Price={props.price2}
        clickMinus= {props.clickonMinus2}
        clickPlus= {props.clickonPlus2}
        inputPlaceHolderValue= {props.inputDisplayValue2}
        changedInput={props.inputChanged}
      />
      <CardItems
        Name={props.name3}
        Price={props.price3}
        clickMinus= {props.clickonMinus3}
        clickPlus= {props.clickonPlus3}
        inputPlaceHolderValue= {props.inputDisplayValue3}
        changedInput={props.inputChanged}
      />
    </div>
  );
}
export default Card;
