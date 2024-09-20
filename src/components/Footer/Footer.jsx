import React from 'react';
import { Link } from "react-router-dom";
import logo5 from '../../assets/logo5.png'




const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/publication">Publications</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="footer-logo">
          <img src={logo5} alt="" className='h-10 w-10' />
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
