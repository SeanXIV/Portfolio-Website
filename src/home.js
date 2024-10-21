import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import profileImage from './assets/images/5Andrew Seanego anseane022.jpg';
import './home.css';

const Button = ({ onClick, children, className, icon: Icon }) => (
  <button onClick={onClick} className={`custom-button ${className}`}>
    {Icon && <Icon className="button-icon" />}
    <span>{children}</span>
  </button>
);

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Kerileng Andrew Seanego</h1>
          <p className="hero-subtitle">Software Developer | Fullstack Enthusiast</p>
          <p className="hero-description">
            With 2 years of training experience from WeThinkCode_, I'm passionate about creating robust backend solutions and expanding into fullstack development. Explore my React.js portfolio to see my journey in action.
          </p>
          <div className="button-container">
            <Button 
              className="primary-button"
              onClick={() => window.location.href = '/contact'}
              icon={ArrowRight}
            >
              Contact Me
            </Button>
            <Button 
              className="secondary-button"
              onClick={() => window.open('https://drive.google.com/file/d/1H4r7_z9xIoTJaAIae-1pWCoJUWavQAsH/view?usp=sharing', '_blank')}
              icon={FileText}
            >
              View CV
            </Button>
            <Button 
              className="github-button"
              onClick={() => window.open('https://github.com/SeanXIV', '_blank')}
              icon={Github}
            >
              GitHub
            </Button>
            <Button 
              className="linkedin-button"
              onClick={() => window.open('https://www.linkedin.com/in/andrew-seanego-1a4013280/', '_blank')}
              icon={Linkedin}
            >
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={profileImage}  
            alt="Andrew Seanego" 
            className="profile-image"
          />
        </div>
      </section>

      <div className="about-section">
        <h2 className="text-3xl font-bold text-center mb-12 font-sans">About me</h2>
        <p className="about-text">
          I am a recent graduate from WeThinkCode_ in South Africa, passionate about leveraging my skills and enthusiasm for technology.
          During my time at WeThinkCode_, I engaged with industry professionals and gained valuable insights into the latest 
          technological developments. This experience, combined with my rigorous education focused on practical workplace experience, 
          has prepared me for real-world challenges in Systems Development.
          <br /><br />
          I have developed proficiency in languages such as Python, Java, and Web Development, and I am eager to apply these skills in
          a professional setting. My hands-on projects, such as creating a Waste Management System API and a multiplayer Toy Robot game, 
          have equipped me with strong problem-solving abilities and a collaborative mindset. I am excited to bring my technical 
          expertise and innovative approach to new opportunities in the tech industry.
        </p>
      </div>
    </div>
  );
}