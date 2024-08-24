import { LOGO_URL } from "../utils/constants";

import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    let btnName = "Login"

    const[btnNameReact,setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    console.log("Header render");
    // if no dependency array=> useEffect is called on every render
    //if dependency array = [] =>useEffect is called on initiall render(just once)
    //if dependency array is [btnReactName] => called everytime btnNameReact is updated.
    useEffect(()=> {
        console.log("use effect called");
    },[])


    return (
      <div className="header">
        <div className="logo-container">
          <img 
              className="logo"
              src = {LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button 
            className="login" 
            onClick={()=>{
                btnNameReact ==="Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
                
            }}>
                {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    ) 
}

export default Header;