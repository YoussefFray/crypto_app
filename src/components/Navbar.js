import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import {login} from "./features/user"
const Navbar = ({ user, setUser }) => {
  const dispatch=useDispatch()
  const PData={
    firstName: "youssef",
    lastName: "fray",
    wallet: "1A1zP1eP5QGefi2DMPTfTL",
    F_Crypto: ["Bitcoin", "Ethereum", "Tether", "Usd-coin", "XRP"],
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const loginS = () =>
  {setUser(PData);
  
  }
    
  const logout = () => setUser(null);
  //useeffect on user with redux
  return (
    <div className="header">
      <div className="container">
        <h1>
          Y<span className="primary">Y</span>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllCryptocurrencies">All Cryptocurrencies</Link>
          </li>
          <li>
            <Link to="/MyCryptocurrencies">My Cryptocurrencies</Link>
          </li>
          <li>
            <Link to="/NFT">NFT</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="btn-group">
          <center>
            {!user ? (
              <button className="btn" onClick={()=>{loginS();dispatch(login(PData))}}>
                login
              </button>
            ) : (
              <button className="btn" onClick={logout}>
                logout
              </button>
            )}
          </center>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
