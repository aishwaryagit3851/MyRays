import { useRef, useEffect } from "react";
import { FaBars, FaBell, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import image24 from 'C:/Users/Aishwarya/myraysapp/src/images/image24.png';
import profile from 'C:/Users/Aishwarya/myraysapp/src/images/user-solid.svg';
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location])

  return (
    <header>
      <div className="nav-itmes-1 nav-2">
        <a className="nav-link active navbar-brand" aria-current="page" href="#"><h4>My Rays Book Publication Center</h4></a>
        <p className="navbar-brand">Pune</p>
      </div>
      <nav ref={navRef}>
        <a className="nav-link pl-5 pr-3 icon2" href="#"><FaBell /></a>
        <a className="nav-link px-4 " href="#"><img src={profile} style={{ height: 25, width: 25 }} className="nav2-img"/></a>
        <a className="nav-link px-3" href="#"><h3>Sachi</h3></a>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;