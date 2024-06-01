import React from "react";
import "./index.css";
import Amg_Logo from "../../assets/mers_logo.png";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.jpeg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={Amg_Logo} />
      </div>
      <ul className="nav-menu">
        <li>
          Mercedes-Benz <br /> G-Class 2021
        </li>

        <li>
          Mercedes-Benz <br /> G-Class 2022
        </li>
        <li>
          Mercedes-Benz <br /> G-Class 2023
        </li>
        <li>
          Mercedes-Benz <br /> G-Class 2024
        </li>
        <li className="nav-search">
          <input type="text" placeholder="Search" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
