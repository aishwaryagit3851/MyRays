import React from 'react';
import Intro from './Intro';
import Footer from './Footer';
import Navbar from './Navbar';
import image18 from 'C:/Users/Aishwarya/myraysapp/src/images/image18.jpg';
const View3 = () => {

    return (
        <>
        <Navbar/>
        <Intro/>
            <div>
                <div>
                    <h2 className="red mt-5">BOOK STORE</h2>
                </div>
                <div className="d-flex View m-5 p-3">
                    <div className="col-md-6">
                        <img src={image18} style={{ height: 550,width:450}} alt="Image not found"/>
                    </div>
                    <div className="col-md-6 pt-5" style={{textAlign:"Left"}}>
                        
                        <h5 className="red pb-2">THE KING OF DRUGS</h5>
                        <p className="pb-1 pl-0">AUTHOR NAME : VISHAL SINGH</p>
                        <p className="pb-1 pl-0">BOOK ISB NO : 978-81-952364-4-2</p>
                        <p className="pb-1 pl-0">DATE OF PUBLICATION : 2021-04-30</p>
                        <p className="pb-1 pl-0">NUMBER OF PAGES : 100</p>
                        <p className="pb-1 pl-0">BOOK CATEGORY : ENGINEERING TECHNOLOGY</p>
                        <p className="pb-1 pl-0">BOOK SUMMARY : DIE MANUFACTURING IS ONE OF MOST ACCURATE AND HIGH PRODUCTION METHODS OF MANUFACTURING. SO, DESIGN OF DIE IS VERY CRUCIAL THING. IN THIS BOOK PROGRESSIVE DIE FOR AN INDUSTRIAL PART IS DESIGNED. IN SINGLE STROKE OF PRESS 3 OPERATIONS ARE GOING TO PERFORMED ON 3 DIFFERENT STATIONS. AT EACH STATION REQUIRED DIE AND PUNCH SET ALONG WITH SUPPORTING PARTS FOR DIE ARE DESIGNED WITH PROPER SAFETY TAKEN INTO ACCOUNT.
                        </p>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default View3