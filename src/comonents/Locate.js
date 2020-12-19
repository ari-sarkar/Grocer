import React, {useEffect} from "react";
import "../styles/Locate.css";
import map from "../media/map.svg";
import shop from "../media/my-shop.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Locate = () => {
    useEffect(()=> {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#locate-us",
            ease: "power1.out",
            start: "-=100 top",
            end: "bottom bottom",
          },
        });
        tl.fromTo(".shop",{autoAlpha:0},{autoAlpha:1, duration:1, ease: "power1"});
        tl.fromTo(".map",{autoAlpha:0, translateX:100},{autoAlpha:1, duration:1, ease: "power1", translateX:0});
      },[])
  return (
    <section id="locate-us">
      <h2>Loate Us</h2>
      <div className="address-location-wrapper">
        <div className="address-wrapper">
          <h3>
            Find us <span style={{ color: "gray", fontSize: "1.5em" }}>@</span>
          </h3>
          <p>Prachinmayapur, Jatiya Bidyalaya Para 3rd lane</p>
        </div>
        <div className="location-map-wrapper">
          <img alt="shop" src={shop} className="shop"></img>
        </div>
      </div>
      <div className="map-image-wrapper">
        <img src={map} alt="mapImage" className="map"></img>
      </div>
    </section>
  );
};
export default Locate;
