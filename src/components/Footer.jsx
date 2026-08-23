import React from 'react';
import { personalInfo } from '../data/resumeData';
import { FiHeart } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            &copy; {currentYear} {personalInfo.name}.
          </p>
          <p className="footer-made-with">
            Сделано с <FiHeart className="footer-heart" /> на React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;