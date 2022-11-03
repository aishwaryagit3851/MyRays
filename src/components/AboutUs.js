import React from 'react';
import Intro from './Intro';
import Footer from './Footer';
import Navbar from './Navbar';
import image2 from 'C:/Users/Aishwarya/myraysapp/src/images/image2.jpg';
import image19 from 'C:/Users/Aishwarya/myraysapp/src/images/image19.jpg';
import image20 from 'C:/Users/Aishwarya/myraysapp/src/images/image20.jpg';
const AboutUs = () => {

    return (
        <>
        <Navbar/>
        <Intro/>
            <div className="Home-1 d-flex p-5">
                <div className="col-md-6 pt-5">
                    <img src={image2} className="image2" alt="Image not found" />
                </div>
                <div className="col-md-6 ">
                    <h1 className="pt-2 red">MY RAYS</h1>
                    <h1 className="pt-2 red">BOOK PUBLISHING PLATFORM</h1>
                    <h3 className="pt-2" >WHO WE ARE?</h3>
                    <p>In order to make the entire self-publishing procedure as simple as possible for the authors, My Rays Publication Center, a seasoned book publishing company with its headquarters in Pune, has developed a number of proprietary tools. One of the top publishers of fiction, non-fiction, and poetry books in India is us.</p>
                    <p>Through writing and publication campaigns, the My Rays Book Publication Center aims to realise the ideal of making each person into a world-class researcher, writer, and publisher who can maintain the universe. We have written works in several disciplines, including mathematics, physical science, biological science, and chemistry.</p>

                </div>
            </div>
            <div>
                <h2 className="py-5">OUR VISION</h2>
                <div className="d-flex AboutUs-2 p-4">
                    <div className="col-md-3 vision">
                        <img src={image19} className="image19"/>
                    </div>
                    <div className="col-md-9">
                        <h3 className="pt-5" style={{ color: 'white', lineHeight: 2.3 }}>"TO TRANSFORM ELIGIBLE POTENTIALS INTO WORLD-CLASS WRITERS TO SUSTAIN THE UNIVERSE."</h3>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="py-5">OUR MISSION</h2>
                <div className="d-flex AboutUs-2 p-4">
                    <div className="col-md-9">
                        <h3 className="pt-5" style={{ color: 'white', lineHeight: 2.3 }}>“ TOBOOK WRITING AND PUBLICATION CAMPAIGN  ”</h3>
                    </div>
                    <div className="col-md-3 mission">
                        <img src={image20} className="image20"/>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}
export default AboutUs