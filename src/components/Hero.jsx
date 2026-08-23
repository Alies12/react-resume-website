import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiUser } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';
import useTypewriter from '../hooks/useTypewriter';
import '../styles/Hero.css';

const Hero = () => {
  const typedText = useTypewriter(personalInfo.title);
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="hero-avatar-wrapper"
          variants={itemVariants}
        >
          {!imageError ? (
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name}
              className="hero-avatar"
              onError={handleImageError}
            />
          ) : (
            <div className="hero-avatar-fallback">
              <FiUser />
            </div>
          )}
          <div className="avatar-ring"></div>
        </motion.div>

        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Сингаевский Андрей
        </motion.h1>

        <motion.div 
          className="hero-subtitle-wrapper"
          variants={itemVariants}
        >
          <span className="hero-subtitle">{typedText}</span>
          <span className="hero-cursor">|</span>
        </motion.div>

        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div 
          className="hero-social"
          variants={itemVariants}
        >
          <a href="https://github.com/Alies12" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="https://t.me/Aliesak" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
        </motion.div>

        <motion.div 
          className="hero-buttons"
          variants={itemVariants}
        >
          <Link to="contact" smooth={true} duration={500} className="btn btn-primary">
            Связаться со мной
          </Link>
          <a 
            href="https://github.com/Alies12" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            <FiGithub /> GitHub
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
        >
          <Link to="about" smooth={true} duration={500}>
            <i className="fas fa-chevron-down"></i>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;