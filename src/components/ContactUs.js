import React from 'react';
import Intro from './Intro';
import Footer from './Footer';
import Navbar from './Navbar';
import image21 from 'C:/Users/Aishwarya/myraysapp/src/images/image21';
import image22 from 'C:/Users/Aishwarya/myraysapp/src/images/image22';
import image23 from 'C:/Users/Aishwarya/myraysapp/src/images/image23';
const ContactUs = () => {

    return (
        <>
            <Navbar />
            <Intro />
            <div className="ContactUs d-flex m-5" style={{ justifyContent: "space-around" }}>
                <div className="ContatUs-1 p-3 col-md-5">
                    <div className="p-2">
                        <div className="card" style={{ width: 450 }}>
                            <div className="card-body">
                                <img src={image21} className="card-img pb-1" alt="not found"/>
                                <h5 className="card-title">Working Hours</h5>
                                <p className="card-text">We appreciate you respecting our available time.</p>
                                <p className="card-text">09:30 am - 05:30 pm</p>
                                <p className="card-text">Monday to Saturday</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card" style={{ width: 450 }}>
                            <div className="card-body">
                                <img src={image22} className="card-img pb-1" alt="not found"/>
                                <h5 className="card-title">Call Us</h5>
                                <p className="card-text">Just pick up the phone to chat with our customer support team.</p>
                                <p className="card-text">+91-11-40546380</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card" style={{ width: 450 }}>
                            <div className="card-body">
                                <img src={image23} className="card-img pb-1" alt="not found"/>
                                <h5 className="card-title">Mail Us</h5>
                                <p className="card-text">Drop us a message.We’ll be glad to answer it.</p>
                                <p className="card-text">crm@arihantbooks.com</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="ContactUs-2 col-md-7 pt-5">
                    <h2 className="pt-0 pb-4 red">Contact Us</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><h4>Your Name</h4></label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><h4>Your Email</h4></label>
                            <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><h4>Your Mobile Number</h4></label>
                            <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Mobile Number" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><h4>Write Your Message</h4></label>
                            <textarea className="form-control" id="exampleInputPassword1" placeholder="Enter Your Message" rows={2} cols={2} />
                        </div>
                        <button type="submit" className="btn px-5 py-3">Submit</button>
                    </form>
                </div>
            </div>
            <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.4056362053634!2d73.76406381984417!3d18.645784870617145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7981a7c5d2397867!2sESparse%20Matrix%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1667027923703!5m2!1sen!2sin"  height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="chart"></iframe>
            </div>
            <Footer />
        </>
    )
}
export default ContactUs 