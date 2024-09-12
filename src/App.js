
import React,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ImageSlider from './components/Slider/ImageSlider';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import SignIn from './components/Signin/SignIn';
import ACRepairPage from './components/Service/ACRepairPage';
import ContactUs from './components/Contacts/ContactUs';
// import CartPage from './components/Cartpage/cart';
import WhyChooseUs from './components/whychoose/WhyChooseUs';
import Cart from './components/Cartpage/Cart';
import AboutUs from './components/Aboutus/AboutUs';
import OtpLogin from './components/otp/OtpLogin';
import CheckoutPage from './components/checkout/CheckoutPage';
// import Cart from './components/Cartpage/popup';
// import { Footer } from './components/Footer/footer';
// import CategorySection from './components/categorybuttons/CategorySection';
import MacbookRepair from './components/Service/macbook/MackbookRepair';
import DesktopSupport from './components/Service/desktop/DesktopSupport';
import Upgrade from './components/Service/Subscription/Upgrade';
import ComponentIns from './components/Service/componentins/ComponentIns';
import CodingIssue from './components/Service/codingissue/CodingIssue';
import Server from './components/Service/Server/Server';
import Blog from './components/blog/Blog';
import Footer from './components/Footer/Footer';
import TermsOfUse from './components/TermandService/TermsOfUse';
import Payment from './components/Payment/Payment';
import NonRefundablePolicy from './nonrefundable/NonRefundablePolicy';
import RagisterPage from './components/Ragister/Register'
import HeroSection from './components/herosection/HeroSection';
import ServiceGrid from './components/servicecard/ServiceGrid';
// import SubscriptionSection from './components/Subcription/SubscriptionSection';
import ServicePackages from './components/servicespackage/ServicePackages';
import FAQs from './components/faqs/FAQs';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // const [cartItems, setCartItems] = useState([]);


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
 

  const Home = () => (
    <div>
         <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
      <HeroSection />
      <ServiceGrid />
      {/* <ServicePackages /> */}
      <WhyChooseUs/>
      {/* <SubscriptionSection /> */}
      <FAQs />
     {/* <ImageSlider /> */}
     {/* <LocationSearch/> */}
     {/* <SearchBar services={services} locations={locations} onSearch={handleSearch} /> */}
     {/* <SearchBar/> */}
  {/* <ElectronicsSection /> */}
 
  {/* <CategorySection/> */}
{/* < OtpLogin/> */}
  
<Footer />
    </div>
  );

  
  return (
    <div className="App">



<Router>
      <Routes>

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signpage" element= {<SignIn />} />
        <Route path = "/windows-repair" element={<ACRepairPage />}/>
        <Route path = "/macbook-repair" element={<MacbookRepair />}/>
        <Route path = "/desktop-repair" element={<DesktopSupport />}/>
        <Route path = "/upgrade" element={<Upgrade />}/>
        <Route path = "/component" element={<ComponentIns />}/>
        <Route path = "/server" element={<Server />}/>
        <Route path = "/CodingIssue" element={<CodingIssue />}/>
        <Route path = "/contactUs" element={<ContactUs />}/>
        <Route path = "/cartPage" element={<Cart />}/>
        <Route path="/checkout" element={<CheckoutPage  />} />
        {/* <Route path = "/cart" element={<Cart/>}/> */}
        {/* Add more routes as needed */}
        {<Route path = "/blog" element={<Blog />}/> }
        <Route path="/aboutus" element= {<AboutUs />} />
        <Route path="/otp" element= {<OtpLogin />} />
        <Route path="/terms-of-services" element= {<TermsOfUse />} />
        <Route path="/payment" element= {<Payment />} />
        <Route path="/refundable-policy" element= {<NonRefundablePolicy/>} />
        <Route path="/register-as-professional" element= {<RagisterPage/>} />
      </Routes>
    
      </Router>

    </div>   
   

  );
}




export default App;