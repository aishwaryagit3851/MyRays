import React from 'react';
import {Link} from "react-router-dom";
import image1 from 'C:/Users/Aishwarya/myraysapp/src/images/image1.jpg';
const Intro = () => {
   
  return (
  <>

  <div className="Intro d-flex">
  <div className="col-md-6 Intro-container pt-4">
    <h1  style={{fontSize:59 ,color:'green'}}>YOU WRITE BOOKS,WE PUBLISH FOR YOU</h1>
    <h2 className="pt-2" style={{fontSize:20}}>Allow us to assist you in putting an end to your book publishing problem</h2>
    <Link to="/signin"><button className="btn mt-3 px-5 py-3">START PUBLISHING</button></Link>
  </div>
  <div className="col-md-6">
    <img src={image1} className="image1" alt="not found"/>
  </div>
  </div>
  </>
  )
}
export default Intro 