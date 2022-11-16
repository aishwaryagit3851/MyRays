import React from 'react';
import {Link} from "react-router-dom";
import image25 from './src/images/image25.png';
import image26 from 'C:/Users/Aishwarya/myraysapp/src/images/image26.png';
import image27 from 'C:/Users/Aishwarya/myraysapp/src/images/image27.png';
import image28 from 'C:/Users/Aishwarya/myraysapp/src/images/image28.png';
const Footer = () => {

    return (
        <>
            <div className="Footer d-flex mx-3 my-5 pt-3">
                <div className="col-md-4"><h5>an experienced and Pune based book publishing company,  with an intention to make the overall self-publishing process as easier as possible for the authors.</h5></div>
                <div className="col-md-4">
                    <div>
                       <h5 className="red">IMPORTANT LINKS</h5>
                            <Link to="/about" style={{ textDecoration: "none", color: "black" }}><h6>ABOUT US</h6></Link>
                            <Link to="/store" style={{ textDecoration: "none", color: "black" }}><h6>BOOKSTORE</h6></Link>
                            <Link to="/contactus" style={{ textDecoration: "none", color: "black" }}><h6>CONTACT US</h6></Link>
                            <Link to="/faqs" style={{ textDecoration: "none", color: "black" }}><h6>FAQ</h6></Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <h5 className="red">Head Office : </h5>
                        <h6>House no.1010, Satav Nagar,</h6>
                        <h6> Handewadi Road,</h6>
                        <h6>Hadapsar, Pune-411028</h6>
                        <h6>Phone:
                            +91 1234567890</h6>
                        <h6>Email:
                            info@bluerosepublishers.com
                        </h6>
                        <h5 className="red">Contact with Us</h5>
                        <div className="d-flex" style={{justifyContent:"center"}}>
                            <img src={image25}/>
                            <img src={image26}/>
                            <img src={image27}/>
                            <img src={image28}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer