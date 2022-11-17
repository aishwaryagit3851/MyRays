import { useRef ,useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link,useLocation}from "react-router-dom";
import image24 from 'C:/Users/Aishwarya/myraysapp/src/images/image24';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  let location = useLocation();
  useEffect(()=>{
      console.log(location.pathname);
  },[location])

	return (
		<header>
			<img src={image24} alt="not found"/>
			<nav ref={navRef} >
				<Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/"><p>HOME</p></Link>
				<Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about"><p>ABOUT</p></Link>
				<Link className={`nav-link ${location.pathname==="/store"?"active":""}`} to="/store"><p>STORE</p></Link>
				<Link className={`nav-link ${location.pathname==="/contactus"?"active":""}`} to="/contactus"><p>CONTACT</p></Link>
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