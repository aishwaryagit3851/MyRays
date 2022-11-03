import React from 'react';
import Intro from './Intro';
import Footer from './Footer';
import Navbar from './Navbar';
const FAQs = () => {
   
  return (
  <>
  <Navbar/>
   <Intro/>
  <div>
    <h2 className="red my-5">FAQ</h2>
    <div className="faq-1">
      <p className="faq">Q.HOW MANY AUTHORS AND EDITORS PUBLISHED THEIR BOOKS?</p>
<p className="faq">ANSWER: AUTHORS-94, EDITORS:65</p>
<p className="faq">Q.CAN I SEE ANY SAMPLE OF THE PUBLICATION EVENT?</p>
<p className="faq">ANSWER: YES , VIEW HERE </p>
<p className="faq">Q. DOES THE CENTRE PUBLISH NEWS AFTER PUBLICATION?</p>
<p className="faq">ANSWER: YES , VIEW HERE </p>
<p className="faq">Q.CAN I SEE THE QUALITY OF THE TRAINING? </p>
<p className="faq">Answer: Yes , VIEW HERE </p>
<p className="faq">Q. WHERE I CAN PROVIDE MY FEEDBACK??</p>
<p className="faq">ANSWER: YES , VIEW HERE </p>
<p className="faq">Q. CAN I JOIN THE WHATSAPP GROUP?</p>
<p className="faq">ANSWER: YES. CLICK  HERE </p>
    </div>
  </div>
  <Footer/>
  </>
  )
}
export default FAQs 