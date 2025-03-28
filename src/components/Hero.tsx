import React from 'react';
import templeImage from '../assets/images/dalada maligawa.jpg';
import './Hero.css';

interface HeroProps {
  onGetUpdates: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetUpdates }) => {
  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${templeImage})` }}
      role="banner"
      aria-label="Hero section with event information"
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title">Sacred Tooth Relic Public Show</h1>
        <button 
          className="cta-button" 
          onClick={onGetUpdates}
          aria-label="Get updates about the event"
        >
          <span className="button-text">Get Updates</span>
          <span className="button-icon" aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero; 