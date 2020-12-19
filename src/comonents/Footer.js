import React from "react";
import "../styles/Footer.css"
const Footer = () => {
    const container={
        width : "100%",
        height: 50,
        backgroundColor: "#433d3c",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const text={
        color: "white",
        //width: "70%",
        //backgroundColor: "white",
    }
    const social={
        display: "flex",
        marginLeft: "5rem",
        color: "white",
    }
    return (
    <div style={container}>
        <div className="copyright" style={text}>
        <p>Designed and Developed by Arindam Sarkar</p>
        </div>
      <div className="social-media" style={social}>
      <a href="https://www.linkedin.com/in/arindam-sarkar-arindamsarkar-tech-6169bb1b7/" target="#"><i class="fab fa-linkedin fa-2x"></i></a>
      <a href="https://github.com/ari-sarkar" target="#"><i class="fab fa-github-square fa-2x" style={{marginLeft: "10px",}}></i></a>
      <a href="https://www.facebook.com/sarkarari/" target="#"><i class="fab fa-facebook-square fa-2x"  style={{marginLeft: "10px",}}></i></a>
      </div>
    </div>
  );
};
export default Footer;
