import React, { useState, useEffect } from 'react';
import './App.css';
import KeyProjects from './components/KeyProjects';
import { profiles } from './utility/profileData'
import AboutMe from './components/AboutMe';


const SKILLS = [
  "Java", "Spring Boot", "System Design", "Microservices",
  "NodeJS", "React", "Elixir", "Phoenix", "Go", "AWS"
];

function App() {
  const [daysExperience, setDaysExperience] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    // 2. EXPERIENCE CALCULATOR
    const startDate = new Date("07/03/2017");
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysExperience(diffDays);
  }, []);

  const handleLaunch = () => {
    setIsLaunched(true);
    // Reset it after 2 seconds so they can see it again
    setTimeout(() => setIsLaunched(false), 2000);
  };

  return (
    <div className="App">
      <header className="hero-section">
        <div className="container">
          <div className="hero-content fade-in-up">
            <p className="greeting">Hello, I'm</p>
            <h1 className="name-title">Sahil Paudel</h1>
            <h2 className="role-title">Senior Software Engineer</h2>

            <div className="experience-badge">
              {/* The rocket container now reacts to the 'isLaunched' state */}
              <span className={`rocket-container ${isLaunched ? 'launching' : ''}`}>
                <span className="flying-rocket">🚀</span>
              </span>
              {daysExperience} Days of Engineering Excellence
              <span className="ticking-dots">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>

            <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#4b5563' }}>
              Passionate about building scalable products and fostering a strong engineering culture.
              Backend specialist, Open Source enthusiast, and currently expanding into Full Stack.
            </p>

            <div style={{ marginTop: '40px' }}>
              <a href="mailto:sahilpaudel@yahoo.in" className="btn-primary" onClick={handleLaunch}
                style={{
                  background: '#2563eb',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                Hire Me
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">Scroll Down</div>
      </header>

      <div className="container">

        <AboutMe />

        <KeyProjects />

        {/* 4. SKILLS SECTION */}
        <section className="section" id="skills">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-container">
            {SKILLS.map((skill, index) => (
              <span className="skill-item" key={index}>{skill}</span>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="social-links">
            {profiles.map((social, index) => (
              <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            ))}
            <a href="mailto:sahilpaudel@yahoo.in">Email</a>
          </div>
          <p style={{ marginTop: '20px' }}>
            &copy; 2017-{new Date().getFullYear().toString().substring(2,4)} Sahil Paudel. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;