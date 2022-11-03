import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2';

const SideMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [subOn, setSubOn] = useState(false);
  const toggle = () => setOpen(!open);
  const toggle2 = () => setSubOn(!subOn);
  return (
    <>
    <Navbar2/>
      <div className={open ? "sidemenu active" : "sidemenu"}>

        <Link to="/dashboard" className="topsection link" activeClassName="active">
          <span><i className="bi bi-ui-radios-grid main-icon" onClick={toggle}></i><h5>Dashboard</h5></span>
        </Link>
        <div className="sidemenu-items">
          <div className="sidemenu-item-1">

            <div className="item-1">

              <span><i className="bi bi-stack icon"></i><h5>Book Store</h5></span>
              {subOn ? <i className="bi bi-chevron-up sub-arr" onClick={toggle2} style={{ color: 'orange' }}></i> : <i className="bi bi-chevron-down sub-arr" onClick={toggle2} style={{ color: 'white' }}></i>}

            </div>

            <div className={subOn ? "item-submenu active" : "item-submenu"}>

              <Link to="/bookstore/addbook" className="link"><span>Add book</span> </Link>
              <Link to="/bookstore/viewbook" className="link"><span>View book</span></Link>
            </div>
          </div>
          <Link to="/enquiry" className="sidemenu-item-2">

            <span><i className="bi bi-file-spreadsheet icon"></i><h5>Enquiry</h5></span>
          </Link>
        </div>
        <div className="sidemenu-footer">

        </div>


      </div>
      <main>{children}</main>
    </>
  )
}
export default SideMenu 