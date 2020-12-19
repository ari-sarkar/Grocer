import React, {useEffect} from "react";
import "../styles/Card.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function CardItems(props) {
  useEffect(()=> {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-outline",
        ease: "power1.out",
        start: "-=300 top",
        end: "bottom bottom",
        // markers: {startColor: "red", endColor: "blue", fontSize: "18px"},
      },
    });
    tl.fromTo(".card-order__wrapper",{translateY: -200, autoAlpha: 0},{translateY: 0, duration: 1, stagger: 0.5, autoAlpha: 1});
    tl.fromTo(".addToCart",{width: 5, color: "transparent"},{width: 250, color: "white"});
  },[])
  return (
    <div className="card-order__wrapper">
      <div className="card-order__item">
        <p style={{ fontSize: 15 }}>
          {props.Name}
          <span style={{ fontSize: 15, paddingLeft: 2 }}>
            {props.Price}
            <span style={{ fontSize: 12 }}>/ kg</span>
          </span>
        </p>
      </div>
      <div className="btn-input__wrapper">
        <button
          className="card-order__item-minus-btn"
          onClick={props.clickMinus}
          disabled={props.inputPlaceHolderValue <= 0}
        >
          -
        </button>
        <input
          type="text"
          placeholder="0"
          onChange={props.changedInput}
          value={
            props.inputPlaceHolderValue >= 0 ? props.inputPlaceHolderValue : ""
          }
        ></input>
        <button className="card-order__item-plus-btn" onClick={props.clickPlus}>
          +
        </button>
      </div>
    </div>
  );
}
export default CardItems;
