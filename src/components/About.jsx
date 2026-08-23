import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education, certifications } from '../data/resumeData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../styles/About.css';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Обо мне
        </motion.h2>

        <div ref={ref} className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalInfo.fullDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div 
            className="about-info"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Личная информация</h3>
            
            <div className="info-item">
              <FiUser className="info-icon" />
              <div>
                <span className="info-label">Имя</span>
                <span className="info-value">Сингаевский Андрей</span>
              </div>
            </div>
            
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">singaevskiy2001@mail.ru</span>
              </div>
            </div>
            
            <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <span className="info-label">Телефон</span>
                <span className="info-value">{personalInfo.phone}</span>
              </div>
            </div>
            
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <span className="info-label">Город</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about-additional">
          <motion.div 
            className="education"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Образование</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.degree}</h4>
                <p>{edu.institution}</p>
                <span>{edu.period}</span>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="certifications"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>Сертификаты</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
                <span>{cert.year}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;