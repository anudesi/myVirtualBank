import "./navbar.css";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faVault } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../contextApi/Context.js";

function Navbar() {
  const { userData, setUserData } = useContext(MyContext);
  return (
    <div className="navContainer">
      <div className="navLogo">
        <FontAwesomeIcon icon={faVault} />
        MyVirtualBank
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs">About us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navBtn">
        {userData ? (
          <><Link to="/loggedPage">
          <button>
              Account Page
            </button></Link>
            <Link to="/logout">
            <button>
              Logout
            </button></Link>
            <h4>
              Hi! <br />{userData.firstName} 
              {userData.lastName}
            </h4>
          </>
        ) : (
          <>
          <Link to="/register">
            <button>
              Register</button></Link>
              <Link to="/login">
            <button>
              Login
            </button></Link>
          </>
        )}
       
      </div>
    </div>
  );
}

export default Navbar;
