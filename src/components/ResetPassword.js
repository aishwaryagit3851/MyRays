import React from 'react';
import Sidebar from './Sidebar';
import {Link} from "react-router-dom";
const ResetPassword = () => {

  return (
    <>

      <div className="d-flex resetpassword">
        <div className="col-md-7 pt-5" style={{textAlign:"left"}}>
          <h2 className="px-5 py-4">Reset Password</h2>
          <div className="px-5">
          <form>
            <div className="mb-3" style={{textAlign:"left"}}>
              <label htmlFor="exampleInputEmail1" className="form-label"><h4 style={{textAlign:"left"}}>Password</h4></label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="8+ characters , 1 Capital letter" />
             
            </div>
            <div className="mb-3" style={{textAlign:"left"}}>
              <label htmlFor="exampleInputPassword1" className="form-label"><h4 style={{textAlign:"left"}}>Confirm Password</h4></label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="8+ characters , 1 Capital letter"/>
            </div>
            <div><Link to="/signin"><button className="btn px-5 py-2 my-4">Reset Password</button></Link></div>
          </form>
          </div>
        </div>
        <div className="col-md-5 signin-sidebar"><Sidebar /></div>
      </div>
    </>
  )
}
export default ResetPassword