import React from 'react';
import './Updates.css';

interface UpdatesProps {
  onBack: () => void;
}

const Updates: React.FC<UpdatesProps> = ({ onBack }) => {
  return (
    <div className="updates-container">
      <button 
        className="back-button" 
        onClick={onBack}
        aria-label="Back to home page"
      >
        <span className="back-icon" aria-hidden="true">←</span>
        Back to Home
      </button>
      
      <div className="updates-header">
        <h1>Latest Updates</h1>
        <p>Stay informed about the Sacred Tooth Relic Public Show</p>
      </div>

      <div className="updates-grid">
        <section className="updates-section">
          <h2>Traffic Updates</h2>
          <div className="updates-list">
            <div className="update-item">
              <div className="update-time">March 28, 2024 - 8:00 AM</div>
              <h3>Road Closures</h3>
              <p>Main roads leading to Sri Dalada Maligawa will be closed from 6:00 AM to 8:00 PM.</p>
            </div>
            <div className="update-item">
              <div className="update-time">March 28, 2024 - 7:30 AM</div>
              <h3>Parking Information</h3>
              <p>Designated parking areas available at Kandy Lake View Parking and City Center Parking.</p>
            </div>
          </div>
        </section>

        <section className="updates-section">
          <h2>Important Notices</h2>
          <div className="updates-list">
            <div className="update-item">
              <div className="update-time">March 27, 2024 - 5:00 PM</div>
              <h3>Entry Requirements</h3>
              <p>Please bring valid ID and follow the dress code guidelines for temple entry.</p>
            </div>
            <div className="update-item">
              <div className="update-time">March 27, 2024 - 4:30 PM</div>
              <h3>Security Measures</h3>
              <p>Enhanced security measures in place. Please arrive early for security checks.</p>
            </div>
          </div>
        </section>

        <section className="updates-section">
          <h2>Important Locations</h2>
          <div className="updates-list">
            <div className="update-item">
              <div className="update-time">March 28, 2024</div>
              <h3>Main Temple Entrance</h3>
              <p>Primary entry point for visitors. Security checkpoints and information desks available.</p>
            </div>
            <div className="update-item">
              <div className="update-time">March 28, 2024</div>
              <h3>Emergency Services</h3>
              <p>Medical aid stations and emergency response teams stationed at key points.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Updates; 