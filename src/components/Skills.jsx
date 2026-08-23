import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/resumeData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const categories = [...new Set(skills.map(skill => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Навыки
        </motion.h2>

        <div ref={ref}>
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skills-category">
              <h3 className="skills-category-title">{category}</h3>
              <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="skill-card"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-level"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: 0.2 + index * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;