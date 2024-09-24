import React from 'react';
import { Link } from "react-router-dom";





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
       
      
      </div>
    </footer>
  );
};

export default Footer;
