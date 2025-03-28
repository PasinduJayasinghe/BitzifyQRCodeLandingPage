import React from 'react';
import templeImage from '../assets/images/dalada maligawa.jpg';
import './Hero.css';

interface HeroProps {
  onGetUpdates: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetUpdates }) => {
  const eventDate = 'March 28, 2024';
  const eventLocation = 'Sri Dalada Maligawa, Kandy';
  const eventTitle = 'Sacred Tooth Relic Public Show';

  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${templeImage})` }}
      role="banner"
      aria-label="Hero section with event information"
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-badge">Public Event</div>
        <h1 className="hero-title">{eventTitle}</h1>
        <div className="hero-subtitle">
          <div className="event-date">{eventDate}</div>
          <div className="event-location">{eventLocation}</div>
        </div>
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