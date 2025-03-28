import React from 'react';
import './BitzifyInfo.css';

const BitzifyInfo: React.FC = () => {
  return (
    <section className="bitzify-section">
      <div className="bitzify-content">
        <h2 className="bitzify-title">Powered by Bitzify</h2>
        <p className="bitzify-description">
          Bitzify is your trusted partner in digital solutions, providing innovative technology services to enhance your experience.
        </p>
        <div className="bitzify-features">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <h3>Fast & Reliable</h3>
            <p>Real-time updates and seamless performance</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <h3>Secure</h3>
            <p>Enterprise-grade security for your data</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💡</span>
            <h3>Innovative</h3>
            <p>Cutting-edge solutions for modern needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitzifyInfo; 