import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.css";
import { Button, Space } from 'antd';
import { BsSun } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLine } from 'react-icons/ri';
import Typography from '@material-ui/core/Typography';
import '../Logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorMode, setColorMode] = useState("light");
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="navFix">
      <div
        className="navContainer"
        style={{ backgroundColor: colorMode === "light" ? "white" : "#1a202c" }}
      >
        <div className="navWrapper">
          <div className="navItem">
            <Link to="/" className="navLink">
              <img
                src={require("../Logo.jpg")}
                alt="logo"
                style={{
                  display: 'flex',
                  width: "100px",
                  height: "100px",
                  marginTop: "50px",
                }}
              />
            </Link>
     
           
          </div>
          <div className="navItem">
            <div className="navIcon" onClick={handleToggleMenu}>
              <i
                className={isOpen ? "fas fa-times" : "fas fa-bars"}
                style={{
                  color: colorMode === "light" ? "black" : "white",
                }}
              >
                {isOpen ? <RiCloseLine /> : <GiHamburgerMenu />}
              </i>
            </div>
            <ul className={isOpen ? "navMenu active" : "navMenu"} style={{ listStyleType: 'none' }}>
  <li className="navItem">
    <Button onClick={() => navigate("/")} type="text">Inicio</Button>
  </li>
  <li className="navItem">
    <Button onClick={() => navigate("/nosotros")} type="text">Nosotros</Button>
  </li>
  <li className="navItem">
    <Button onClick={() => navigate("/contactform")} type="text">Contáctanos</Button>
  </li>
  <li className="navItem">
    <Button onClick={() => navigate("/material")} type="text">Material</Button>
  </li>
  <li className="navItem">
    <Button onClick={() => navigate("/consultas")} type="text">Consultas</Button>
  </li>
  <li className="navItem">
    <Button onClick={() => navigate("/cursoverano")} type="text">Curso de Verano</Button>
  </li>
</ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .navMenu {
            display: flex !important;
          }
          .navIcon {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}