import React from 'react';
import Intro from './Intro';
import Navbar from './Navbar';
import Footer from './Footer';
import {Link} from "react-router-dom";
import image16 from 'C:/Users/Aishwarya/myraysapp/src/images/image16.jpg';
import image17 from 'C:/Users/Aishwarya/myraysapp/src/images/image17.jpg';
import image18 from 'C:/Users/Aishwarya/myraysapp/src/images/image18.jpg';
const Store = () => {

    return (
        <>
        <Navbar/>
         <Intro/>
            <div>
                <div>
                    <h2 className="red mt-5">BOOK STORE</h2>
                </div>
                <div className="d-flex  Store justify-content-center p-4">

                    <div>
                        <img src={image16} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                       <Link to="/view1"><button className="btn px-5">View</button></Link>
                    </div>
                    <div>
                        <img src={image17} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view2"><button className="btn px-5">View</button></Link>
                    </div>
                    <div>
                        <img src={image18} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view3"><button className="btn px-5">View</button></Link>
                    </div>
                </div>
                <div className="d-flex Store justify-content-center p-4">
                    <div>
                        <img src={image16} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view1"><button className="btn px-5">View</button></Link>
                    </div>
                    <div>
                        <img src={image17} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view2"><button className="btn px-5">View</button></Link>
                    </div>
                    <div>
                        <img src={image18} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view3"><button className="btn px-5">View</button></Link>
                    </div>
                </div>
                <div className="d-flex Store justify-content-center p-4">
                    <div>
                        <img src={image16} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view1"><button className="btn px-5">View</button></Link>
                    </div>
                    <div>
                        <img src={image17} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view2"><button className="btn px-5">View</button></Link>
                    </div>
                    <div>
                        <img src={image18} className="Store-item p-4" alt="not found"/>
                        <h5>Encounters of a Sapiophile</h5>
                        <h5>Author: xyz</h5>
                        <h5>Rs. 199/-</h5>
                        <Link to="/view3"><button className="btn px-5">View</button></Link>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Store 