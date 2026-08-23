import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/resumeData';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { FiBriefcase, FiMapPin, FiCalendar, FiClock, FiChevronRight } from 'react-icons/fi';
import '../styles/Experience.css';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Опыт работы
        </motion.h2>

        <div ref={ref} className="timeline">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              custom={index}
              variants={timelineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <div className="timeline-dot" />
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{job.title}</h3>
                    <h4 className="timeline-company">
                      <FiBriefcase /> {job.company}
                    </h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">
                      <FiCalendar /> {job.period}
                    </span>
                    <span className="timeline-duration">
                      <FiClock /> {job.duration}
                    </span>
                    <span className="timeline-location">
                      <FiMapPin /> {job.location}
                    </span>
                  </div>
                </div>

                <p className="timeline-description">{job.description}</p>

                <ul className="timeline-achievements">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>
                      <FiChevronRight /> {achievement}
                    </li>
                  ))}
                </ul>

                <div className="timeline-technologies">
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;