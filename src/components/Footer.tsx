import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setEmail('');
      setFeedback('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Bitzify</h3>
          <div className="contact-info">
            <p>📧 contact@bitzify.com</p>
            <p>📱 +94 77 123 4567</p>
            <p>📍 Colombo, Sri Lanka</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Send Feedback</h3>
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Your feedback"
                required
              />
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Feedback'}
            </button>
            {submitStatus === 'success' && (
              <p className="success-message">Thank you for your feedback!</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bitzify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 