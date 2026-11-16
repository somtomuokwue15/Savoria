import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, MapPin, Phone, Mail, Clock, Send, Heart, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setNewsletterStatus({
      type: 'success',
      message: 'Thank you! You are now subscribed to our VIP culinary newsletter.'
    });
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus(null), 5000);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        {/* Column 1: Brand & Bio */}
        <div className="footer-col footer-brand-col">
          <Link to="/" className="brand-logo footer-logo">
            <div className="logo-icon-wrapper">
              <Utensils className="logo-icon" size={22} />
            </div>
            <div className="logo-text-group">
              <span className="brand-name">SAVORIA</span>
              <span className="brand-subtext">BISTRO & LOUNGE</span>
            </div>
          </Link>
          <p className="footer-bio">
            Savoria Bistro celebrates authentic artisanal gastronomy, locally harvested farm produce,
            and an intimate dining ambiance crafted for cherished moments and unforgettable culinary memories.
          </p>
          <div className="footer-awards-tag">
            <span>⭐ Rated 4.9/5 by over 10,000+ happy patrons</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/about">Our Story & Chefs</Link></li>
            <li><Link to="/menu">Artisanal Menu</Link></li>
            <li><Link to="/contact">Reservations & Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Hours & Location */}
        <div className="footer-col">
          <h4 className="footer-title">Dining Hours</h4>
          <ul className="footer-hours-list">
            {RESTAURANT_INFO.hours.map((h, i) => (
              <li key={i} className="footer-hour-item">
                <span className="footer-day">{h.days}</span>
                <span className="footer-time">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="footer-contact-mini">
            <p><MapPin size={16} /> {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.city}</p>
            <p><Phone size={16} /> {RESTAURANT_INFO.phone}</p>
            <p><Mail size={16} /> {RESTAURANT_INFO.email}</p>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-col footer-newsletter-col">
          <h4 className="footer-title">Culinary Dispatch</h4>
          <p className="footer-newsletter-text">
            Subscribe to receive private invitations to chef tasting menus, seasonal wine releases, and exclusive culinary events.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="newsletter-input"
                aria-label="Newsletter email address"
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <Send size={18} />
              </button>
            </div>
            {newsletterStatus && (
              <div className={`newsletter-feedback ${newsletterStatus.type}`}>
                {newsletterStatus.type === 'success' && <CheckCircle2 size={14} />}
                <span>{newsletterStatus.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. Crafted with <Heart size={14} className="heart-icon" /> using React JS.
          </p>
          <div className="footer-badges">
            <span className="badge-tag">React JS Project</span>
            <span className="badge-tag">Responsive Design</span>
            <span className="badge-tag">Clean Component Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
