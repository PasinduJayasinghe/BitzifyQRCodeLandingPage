import React from 'react';
import './Updates.css';

interface UpdatesProps {
  onBack: () => void;
}

interface UpdateItem {
  time: string;
  title: string;
  description: string;
}

interface UpdateSection {
  title: string;
  items: UpdateItem[];
}

const Updates: React.FC<UpdatesProps> = ({ onBack }) => {
  const updateSections: UpdateSection[] = [
    {
      title: 'Traffic Updates',
      items: [
        {
          time: 'March 28, 2024 - 8:00 AM',
          title: 'Road Closures',
          description: 'Main roads leading to Sri Dalada Maligawa will be closed from 6:00 AM to 8:00 PM.'
        },
        {
          time: 'March 28, 2024 - 7:30 AM',
          title: 'Parking Information',
          description: 'Designated parking areas available at Kandy Lake View Parking and City Center Parking.'
        }
      ]
    },
    {
      title: 'Important Notices',
      items: [
        {
          time: 'March 27, 2024 - 5:00 PM',
          title: 'Entry Requirements',
          description: 'Please bring valid ID and follow the dress code guidelines for temple entry.'
        },
        {
          time: 'March 27, 2024 - 4:30 PM',
          title: 'Security Measures',
          description: 'Enhanced security measures in place. Please arrive early for security checks.'
        }
      ]
    }
  ];

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
        {updateSections.map((section, index) => (
          <section key={index} className="updates-section">
            <h2>{section.title}</h2>
            <div className="updates-list">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="update-item">
                  <div className="update-time">{item.time}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Updates; 