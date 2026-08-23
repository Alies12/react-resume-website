import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Определяем активную секцию
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Главная', to: 'hero' },
    { title: 'Обо мне', to: 'about' },
    { title: 'Навыки', to: 'skills' },
    { title: 'Опыт', to: 'experience' },
    { title: 'Проекты', to: 'projects' },
    { title: 'Контакты', to: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500}
          className="navbar-logo"
          onClick={() => setIsOpen(false)}
        >
          СА
        </Link>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className={`navbar-link ${activeSection === item.to ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <button 
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;