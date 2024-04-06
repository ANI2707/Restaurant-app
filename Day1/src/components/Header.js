import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
    const [btnName,setBtnName]=useState("login");


  // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function


    useEffect(()=>{
      // console.log("header useEffect called");
    },[])

    const onlineStatus=useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              online status : {onlineStatus === true ? 'online' : 'offline'}
            </li>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/grocery'}>Grocery</Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName==="login" ? setBtnName("logout") : setBtnName("login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;