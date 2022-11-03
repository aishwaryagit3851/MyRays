import React from 'react';
import Sidebar from './Sidebar';
import {Link} from "react-router-dom";
const ForgotPassword = () => {

    return (
        <>
            <div className="d-flex forgotpassword">
                <div className="col-md-7 px-5 py-5" style={{ textAlign: "left" }}>
                   <h2 className="p-5">Forgot Password</h2>
                   <h5>Recovery email has been sent to your resgistered account.</h5>
                   <div className="d-flex p-2">
                    <input type="number" className="fp-input m-1"/>
                    <input type="number" className="fp-input m-1"/>
                    <input type="number" className="fp-input m-1"/>
                    <input type="number" className="fp-input m-1"/>
                    <input type="number" className="fp-input m-1"/>
                   </div>
                   <div style={{textAlign:"right",color:"blue"}}>Resend OTP</div>
                   <div style={{paddingLeft:200,paddingTop:10}}><Link to="/resetpassword"><button className="btn" style={{padding:15}}>Submit</button></Link></div>
                </div>
                <div className="col-md-5 signin-sidebar"><Sidebar /></div>
            </div>
        </>
    )
}
export default ForgotPassword