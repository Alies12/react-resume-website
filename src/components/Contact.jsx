import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/resumeData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FiGithub, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  const socialLinks = [
    { icon: FiGithub, url: "https://github.com/Alies12", label: 'GitHub' },
    { icon: FaTelegram, url: "https://t.me/Aliesak", label: 'Telegram' },
    { icon: FiMail, url: "mailto:singaevskiy2001@mail.ru", label: 'Email' }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Контакты
        </motion.h2>

        <div ref={ref} className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Давайте работать вместе!</h3>
            <p>
              Открыт для новых проектов и интересных предложений.
              Свяжитесь со мной любым удобным способом.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <FiMail className="contact-detail-icon" />
                <div>
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">singaevskiy2001@mail.ru</span>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <FiMapPin className="contact-detail-icon" />
                <div>
                  <span className="contact-detail-label">Город</span>
                  <span className="contact-detail-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;