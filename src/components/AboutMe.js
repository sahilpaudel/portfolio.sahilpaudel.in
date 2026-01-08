import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-refined-section" id="about">
      <div className="about-container">
        
        <div className="about-grid-layout">
          {/* Left Side: The Passion Statement */}
          <div className="about-column-left">
            <div className="accent-bar"></div>
            <p className="vision-text">
              My passion is to contribute in any way possible for the 
              <span className="vision-blue"> growth of engineering culture </span> 
              around me <span className="vision-small">(mostly within me)</span>.
            </p>
          </div>

          {/* Right Side: The Professional Detail */}
          <div className="about-column-right">
            <div className="bio-text">
              <p>
                I am a <strong>Senior Software Engineer</strong> with over 8 years of experience in 
                crafting robust backend systems. I specialize in <span className="tech-accent">Java</span>, 
                <span className="tech-accent">Spring Boot</span>, <span className="tech-accent">Distributed Systems</span>, 
                and <span className="tech-accent">Microservices</span>.
              </p>
              <p>
                My focus is on building scalable web applications and fostering strong engineering standards. 
                While I'm a backend specialist at heart, I'm currently expanding my horizons into 
                <strong> UI development</strong> with React to build complete, end-to-end products.
              </p>
            </div>
          </div>
        </div>

        {/* Bolder Demarcation */}
        <div className="section-divider-area">
          <div className="bold-horizontal-line"></div>
          <div className="divider-node"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;