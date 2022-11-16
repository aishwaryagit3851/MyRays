import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import {Link} from "react-router-dom";
const Signin = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[])
  
  return (
    <>
      {
        loading ?
          <div className="splash">
            <h1>A BEST BOOK PUBLISHING PLATFORM</h1>
          </div>
          :
  



      <div className="d-flex signin">
        <div className="col-md-7 p-5" style={{ textAlign: "left" }}>
          <h2 className="px-5">SignIn</h2>
          <div id="emailHelp" className="form-text px-5 py-2" style={{ textAlign: "left" }}><h5>It's not long before you embark on this journey!</h5></div>
          <div className="px-5">
            <form>
              <div className="mb-3" style={{ textAlign: "left" }}>
                <label htmlFor="exampleInputEmail1" className="form-label"><h4 style={{ textAlign: "left" }}>E-mail</h4></label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="name@email.com" />

              </div>
              <div className="mb-3" style={{ textAlign: "left" }}>
                <label htmlFor="exampleInputPassword1" className="form-label"><h4 style={{ textAlign: "left" }}>Password</h4></label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="8+ characters , 1 Capital letter" />
              </div>
              <div style={{ textAlign: "right", color: "blue" }}><Link to="/forgotpassword">Forgot Password</Link></div>
              <Link to="/sidebar2"><button className="btn px-5 py-3 my-4">SignIn</button></Link>
            </form>
          </div>
        </div>
        <div className="col-md-5 signin-sidebar"><Sidebar /></div>
      </div>}
    </>
  )
}
export default Signin 