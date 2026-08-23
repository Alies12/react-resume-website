import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/resumeData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Projects.css';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Проекты
        </motion.h2>

        <div ref={ref} className="projects-empty">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="empty-state"
          >
            <div className="empty-icon">
              <i className="fas fa-folder-open"></i>
            </div>
            <h3>Проекты скоро появятся</h3>
            <p>
              Я активно работаю над новыми проектами и скоро добавлю их сюда.
              А пока вы можете посмотреть мой GitHub.
            </p>
            <a 
              href="https://github.com/Alies12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={handleClick}
             >
             <i className="fab fa-github"></i> Перейти на GitHub
            </a>
            
            {showMessage && (
              <motion.div
                className="empty-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Открываю GitHub в новой вкладке...
              </motion.div>
            )}
          </motion.div>
        </div>

        {projects.length > 0 && (
          <div className="projects-grid">
            {/* Здесь будут отображаться проекты, когда они будут добавлены */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;