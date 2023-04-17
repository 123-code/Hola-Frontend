import React, { useState } from "react";
import "./navbar.css"; 
//import Shubham_Verma_Resume from "./Shubham_Verma_Resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode, setColorMode] = useState("light");

  const onButtonClick = () => {
    
  };

  return ( 
    <div id="navFix">
      <div
        className="navContainer"
        style={{ backgroundColor: colorMode === "light" ? "white" : "#1a202c" }}
      >
        <div className="navWrapper">
          <div className="navLeft">
            <a href="#Home" className="navLogo">
             Hola TL
            </a>
          </div>
          <div className="navRight">
            <div className="navIcon" onClick={() => setIsOpen(!isOpen)}>
              <i
                className={isOpen ? "fas fa-times" : "fas fa-bars"}
                style={{
                  color: colorMode === "light" ? "black" : "white",
                }}
              ></i>
            </div>
            <ul className={isOpen ? "navMenu active" : "navMenu"}>
              <li className="navItem">
                <a href="#Home" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#About" className="navLink">
                  About
                </a>
              </li>
              <li className="navItem">
                <a href="#Skills" className="navLink">
                  Skills
                </a>
              </li>
              <li className="navItem">
                <a href="#Projects" className="navLink">
                  Projects
                </a>
              </li>
              <li className="navItem">
                <a href="#Contact" className="navLink">
                  Contact
                </a>
              </li>
              <li className="navItem">
                <button
                  className="navLink resumeLink"
                  onClick={onButtonClick}
                  style={{
                    backgroundColor:
                      colorMode === "light" ? "#a891b7" : "#f56565",
                    color: colorMode === "light" ? "white" : "black",
                  }}
                >
                  Resume
                </button>
              </li>
              <li className="navItem">
                <button
                  className="navLink"
                  onClick={() =>
                    setColorMode(colorMode === "light" ? "dark" : "light")
                  }
                  style={{
                    backgroundColor:
                      colorMode === "light" ? "#a891b7" : "#f56565",
                    color: colorMode === "light" ? "white" : "black",
                  }}
                >
                  {colorMode === "light" ? "Dark" : "Light"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
