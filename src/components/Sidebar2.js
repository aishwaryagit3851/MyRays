import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import Dashboard from './Dashboard';
import {
    FaAddressBook,
} from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';



const Sidebar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [storeOpen, setStoreOpen] = useState(false);
    const toggle2 = () => setStoreOpen(!storeOpen)


    return (
        <>
          <div><Navbar2/></div>
            <div className="container flex">
                <div style={{ width: isOpen ? "30vw" : "13vw" }} className="sidebar2">
                    <NavLink to="/sidebar2/dashboard" className="link">
                        <i className="bi bi-ui-radios-grid main-icon" onClick={toggle}></i>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Dashboard</div>
                    </NavLink>

                    <div className="link">
                        <div className="icon" onClick={toggle}><FaAddressBook /></div>
                        <div className="link_text" style={{ display: isOpen ? "block" : "none" }} onClick={toggle2}>Book Store</div>

                    </div>
                    <div className={storeOpen && isOpen ? "item-submenu active" : "item-submenu"}>

                        <NavLink to="/sidebar2/bookstore/addbook" className="link"><span className="link_text">Add book</span> </NavLink>
                        <NavLink to="/sidebar2/bookstore/viewbook" className="link"><span className="link_text">View book</span></NavLink>
                    </div>
                    <NavLink to="/sidebar2/enquiry" className="link" >
                        <i className="bi bi-file-spreadsheet icon" onClick={toggle}></i>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Enquiry</div>
                    </NavLink>
                    <NavLink to="/" className="logout">
                        <div ><i className="bi bi-power icon logout_icon"></i></div>
                    </NavLink>
                </div>
                <main style={{ width: isOpen ? "70vw" : "85vw" }} ><Outlet/></main>
            </div>
        </>
    );
};

export default Sidebar2;