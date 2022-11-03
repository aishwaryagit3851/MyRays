
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Intro from './components/Intro';
import Store from './components/Store';
import View1 from './components/View1';
import View2 from './components/View2';
import View3 from './components/View3';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import Signin from './components/Signin';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Sidebar2 from './components/Sidebar2';
import AddBook from './components/AddBook.js';
import ViewBook from './components/ViewBook';
import Dashboard from './components/Dashboard';
import Enquiry from './components/Enquiry';
import SideMenu from './components/SideMenu';








function App() {

  return (


    < div className="App" >
      {/* <BrowserRouter>
        <Sidebar2>
          <Routes>
            <Route eaxct path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/bookstore/addbook" element={<AddBook />} />
            <Route exact path="/bookstore/viewbook" element={<ViewBook />} />
            <Route exact path="/enquiry" element={<Enquiry />} />

          </Routes>
        </Sidebar2>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/view1" element={<View1 />} />
          <Route exact path="/view2" element={<View2 />} />
          <Route exact path="/view3" element={<View3 />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/sidebar2" element={<Sidebar2 />} >
          <Route exact path="/sidebar2/dashboard" element={<Dashboard />} />
          <Route exact path="/sidebar2/bookstore/addbook" element={<AddBook />} />
          <Route exact path="/sidebar2/bookstore/viewbook" element={<ViewBook />} />
          <Route exact path="/sidebar2/enquiry" element={<Enquiry />} /></Route>
          
        </Routes>
      </BrowserRouter>:




    </div>

  );
}


export default App;

















