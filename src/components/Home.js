import React from 'react';
import Intro from './Intro';
import Footer from './Footer';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import image2 from 'C:/Users/Aishwarya/myraysapp/src/images/image2.jpg';
import image3 from 'C:/Users/Aishwarya/myraysapp/src/images/image3.jpg';
import image4 from 'C:/Users/Aishwarya/myraysapp/src/images/image4.jpg';
import image5 from 'C:/Users/Aishwarya/myraysapp/src/images/image5.jpg';
import image6 from 'C:/Users/Aishwarya/myraysapp/src/images/image6.jpg';
import image7 from 'C:/Users/Aishwarya/myraysapp/src/images/image7.jpg';
import image8 from 'C:/Users/Aishwarya/myraysapp/src/images/image8.jpg';
import image9 from 'C:/Users/Aishwarya/myraysapp/src/images/image9.jpg';
import image10 from 'C:/Users/Aishwarya/myraysapp/src/images/image10.png';
import image11 from 'C:/Users/Aishwarya/myraysapp/src/images/image11.jpg';
import image12 from 'C:/Users/Aishwarya/myraysapp/src/images/image12.jpg';
import image13 from 'C:/Users/Aishwarya/myraysapp/src/images/image13.jpg';
import image14 from 'C:/Users/Aishwarya/myraysapp/src/images/image14.jpg';
import image15 from 'C:/Users/Aishwarya/myraysapp/src/images/image15.jpg';

const Home = () => {
    return (
        <>
        <Navbar/>
        <Intro/>
            <div className="Home-1 d-flex p-5">
                <div className="col-md-6 pt-5">
                    <img src={image2} className="image2" alt="not found"/>
                </div>
                <div className="col-md-6 ">
                    <h1 className="pt-2 red">MY RAYS</h1>
                    <h1 className="pt-2 red">BOOK PUBLISHING PLATFORM</h1>
                    <h3 className="pt-2" >WHO WE ARE?</h3>
                    <p>In order to make the entire self-publishing procedure as simple as possible for the authors, My Rays Publication Center, a seasoned book publishing company with its headquarters in Pune, has developed a number of proprietary tools. One of the top publishers of fiction, non-fiction, and poetry books in India is us.</p>
                    <p>Through writing and publication campaigns, the My Rays Book Publication Center aims to realise the ideal of making each person into a world-class researcher, writer, and publisher who can maintain the universe. We have written works in several disciplines, including mathematics, physical science, biological science, and chemistry.</p>
                 <Link to='/about'><button className="btn mt-3 px-5 py-3">READ MORE</button></Link>
                </div>
            </div>
            <div className="Home-2">
                <div>
                    <h2 className="text-center pb-2 red">FROM THE STORE</h2>
                    <div className="Home-2-1 pt-4 pb-4">
                        <h3>Browse the widest range of our Products from Featured to Bestsellers</h3>
                        <div className="d-flex justify-content-center" style={{ color: 'white' }}>
                            <div>
                                <img src={image3} className="image3 col-md-4 p-4" alt="not found"/>
                                <h4>SUMMER HOLIDAYS</h4>
                                <h5>By Yogesh Shinde</h5>
                            </div>
                            <div>
                                <img src={image4} className="image4 col-md-4 p-4" alt="not found"/>
                                <h4>SUMMER HOLIDAYS</h4>
                                <h5>By Yogesh Shinde</h5>
                            </div>
                            <div>
                                <img src={image5} className="image5 col-md-4 p-4" alt="not found"/>
                                <h4>SUMMER HOLIDAYS</h4>
                                <h5>By Yogesh Shinde</h5>
                            </div>
                        </div>
                        <Link to='/store'><button className="btn mt-3 px-5 py-3">READ MORE</button></Link>
                    </div>
                </div>
            </div>
            <div className="Home-3">
                <div className="px-4">
                    <h2 className="text-center py-3 red">BOOK PUBLISHING PROCESS</h2>
                    <div className="mx-5 pb-2"><p>Publishing process with OrangeBooks Publication simplifies your book publication requirements. Our book publishing consultant will guide you throughout the self publishing process to transform your manuscript to a masterpiece book. Following is the flowchart of Self Book Publishing.</p></div>
                </div>
                < div className="Home-3-flex">
                    <div className="Home-3-1 col-md-4 p-3">
                        <div className="Home-item mb-5 pb-1">
                            <img src={image7} className="image" alt="not found"/>
                            <h5>1.REGISTRATION AND CONSULTATION</h5>
                            <p>Register with us by filling a simple form and our book publishing consultant will call you to discuss about your book .</p>
                        </div>
                        <div className="Home-item pb-3">
                            <img src={image8} className="image" alt="not found"/>
                            <h5>2.DESIGN AND FORMATTING</h5>
                            <p>
                                After finalising the proposal, you need to submit your manuscript and other design inputs for book cover designing and publication process.</p>
                        </div>
                    </div>
                    <div className="col-md-4"><img src={image6} className="image6" alt="not found"/></div>

                    <div className="Home-3-2 col-md-4 p-3">
                        <div className="Home-item pb-1 mb-5 pt-2">
                            <img src={image9} className="image" alt="not found"/>
                            <h5>3.FINAL MANUSCRIPT</h5>
                            <p>after design & formating manuscript,final manuscript will be ready with 10% similarity index.</p>
                        </div>
                        <div className="Home-item pb-2 pt-3">
                            <img src={image10} className="image" alt="not found"/>
                            <h5>4.BOOK PUBLISHED</h5>
                            <p>
                                After finalising final manuscript, we submit manuscript proposal for book isbn no. as we received isbn no, book will be published on our book store.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="Home-4 mt-5">
                <h2 className="red">WHY MY RAYS BOOK PUBLISHING</h2>
                <div className="Home-4-flex">
                    <div className="Home-4-1">
                        <img src={image11} className="image11 sm-img px-" alt="not found"></img>
                        <h6 className="child">10% SIMILARITY INDEX</h6>
                    </div>
                    <div className="Home-4-1">
                        <img src={image12} className="image12 sm-img px-3" alt="not found"></img>
                        <h6 className="child">TRAINING TO AUTHORS AND EDITORS</h6>
                    </div>
                    <div className="Home-4-1">
                        <img src={image13} className="image13 sm-img px-3" alt="not found"></img>
                        <h6 className="child">COST EFFECTIVENESS</h6>
                    </div>
                    <div className="Home-4-1">
                        <img src={image13} className="image13 sm-img px-3" alt="not found"></img>
                        <h6 className="child">BOOK AVAILABLE WORLDWIDE</h6>
                    </div>
                    <div className="Home-4-1">
                        <img src={image14} className="image14 sm-img px-3" alt="not found"></img>
                        <h6 className="child">STRICT PEER REVIEW POLICY</h6></div>

                </div>
            </div>
            <div className="Home-5 my-5">
                <h2 className="red pb-4">AUTHORS TESTIMONIAL</h2>
                <div className="Home-5-1 py-4">
                    <div><img src={image15} className="image15 pb-2" alt="not found"/></div>
                    <div>
                        <h3>MR.SUNIL</h3>
                        <h4>PROFESSOR</h4>
                    </div>
                    <div>
                        <p>“ The Best Publishing House is Best!!! Just like the publishing Company Name Its a very good publishing Company As you Know U Like  Books is published by The Best Publishing House “</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Home