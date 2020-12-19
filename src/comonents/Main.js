import React, {useEffect} from "react";
import "../styles/Main.css";
import banner from "../media/download.png";
import { HashLink as Link } from "react-router-hash-link";
import gsap from "gsap";
const Main = () => {
useEffect(()=> {
  const tl=gsap.timeline({
  
  });
  tl.fromTo(".order-btn",{width: 5, color: "transparent"},{width: 250, color: "white", delay: 2});
},[])
  return (
    <main>
      <div className="left-main">
        <img src={banner} alt="banner"></img>
      </div>
      <div className="right-main">
          <h1>GET YOUR DAILY GROCERY ITEMS DELIVERED AT YOUR DOORSTEP</h1>
        <div className="right-lower__main">
          <Link to="#products">
          <button
          className="order-btn"
          type="button">Order Now</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Main;
