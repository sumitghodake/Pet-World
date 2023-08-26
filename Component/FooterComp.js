import React from 'react'
import '../AllCss/Footer.css'
import logo1 from '../Images/Dog.jpg';


const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
            <img src={logo1} alt="" />
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 People and Pets Love Visiting Pet World. All rights reserved.</p>
          <p>FC Road, PUNE, INDIA</p>
          Email: admin@petworld.com
          Phone: +91 8605608790   
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;

