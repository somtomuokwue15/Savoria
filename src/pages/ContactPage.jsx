import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Calendar,
  Sparkles
} from 'lucide-react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

const ContactPage = () => {
  const { setIsReservationOpen } = useCart();

  // Controlled form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({});
  // Form submission feedback state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketDetails, setTicketDetails] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ accordion active item
  const [openFaq, setOpenFaq] = useState(0);

  // Validation logic
  const validateForm = () => {
    const errs = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please select or provide a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a more detailed message (minimum 10 characters).';
    }

    return errs;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time clearance of error once user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate server submission
    setTimeout(() => {
      const ticketId = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
      setTicketDetails({
        ticketId,
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
      setErrors({});
    }, 900);
  };

  const resetFormState = () => {
    setIsSubmitted(false);
    setTicketDetails(null);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="contact-page">
      {/* 1. CONTACT HERO */}
      <section className="page-hero contact-hero">
        <div className="hero-overlay" />
        <div className="container page-hero-content">
          <span className="page-hero-kicker">Connect With Savoria</span>
          <h1 className="page-hero-title">We Look Forward to Welcoming You</h1>
          <p className="page-hero-subtitle">
            Have an inquiry regarding table reservations, private culinary banquets, or dietary requests?
            Our hospitality team is at your dedicated service.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CARDS STRIP */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-info-grid">
            {/* Card 1: Address */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <MapPin size={24} />
              </div>
              <h3>Visit Our Bistro</h3>
              <p className="contact-card-main">{RESTAURANT_INFO.address.street}</p>
              <p className="contact-card-sub">
                {RESTAURANT_INFO.address.district}, {RESTAURANT_INFO.address.city}
              </p>
              <span className="contact-card-badge">Valet Parking Available</span>
            </div>

            {/* Card 2: Phone */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Phone size={24} />
              </div>
              <h3>Direct Telephone</h3>
              <p className="contact-card-main">
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="contact-link">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="contact-card-sub">Lines open daily: 10:00 AM – 10:00 PM</p>
              <span className="contact-card-badge">Instant Concierge Assistance</span>
            </div>

            {/* Card 3: Email */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Mail size={24} />
              </div>
              <h3>Email & Bookings</h3>
              <p className="contact-card-main">
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="contact-link">
                  {RESTAURANT_INFO.email}
                </a>
              </p>
              <p className="contact-card-sub">
                Reservations: {RESTAURANT_INFO.reservationEmail}
              </p>
              <span className="contact-card-badge">Responses within 2 business hours</span>
            </div>

            {/* Card 4: Hours */}
            <div className="contact-info-card">
              <div className="contact-card-icon-wrap">
                <Clock size={24} />
              </div>
              <h3>Dining Hours</h3>
              <p className="contact-card-main">Mon – Sun Service</p>
              <p className="contact-card-sub">Lunch: 12:00 PM – 03:30 PM</p>
              <p className="contact-card-sub">Dinner: 05:00 PM – 11:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN FORM & MAP SECTION */}
      <section className="section-padding contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            {/* Form Column */}
            <div className="contact-form-wrapper">
              <div className="form-header-area">
                <span className="section-kicker">Send an Inquiry</span>
                <h2 className="form-section-title">Get in Touch with Our Team</h2>
                <p className="form-section-subtitle">
                  Fill out the form below and our guest experience coordinator will reply promptly.
                </p>
              </div>

              {/* Success Feedback Confirmation Card */}
              {isSubmitted && ticketDetails ? (
                <div className="form-feedback-card success-card">
                  <div className="feedback-icon-box">
                    <CheckCircle2 size={48} className="feedback-check-icon" />
                  </div>
                  <h3>Message Successfully Received!</h3>
                  <p className="feedback-ticket-code">
                    Reference Ticket: <strong>{ticketDetails.ticketId}</strong>
                  </p>
                  <p className="feedback-thank-msg">
                    Thank you, <strong>{ticketDetails.name}</strong>. We have registered your inquiry
                    regarding <em>"{ticketDetails.subject}"</em> at {ticketDetails.submittedAt}. A confirmation copy
                    has been sent to <strong>{ticketDetails.email}</strong>.
                  </p>
                  <div className="feedback-action-row">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={resetFormState}
                    >
                      Send Another Message
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setIsReservationOpen(true)}
                    >
                      <Calendar size={16} />
                      <span>Reserve a Table</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form with Controlled Inputs & Validation */
                <form onSubmit={handleSubmit} className="guest-contact-form" noValidate>
                  {/* Row 1: Name & Email */}
                  <div className="form-grid-2">
                    <div className="form-field-group">
                      <label htmlFor="contact-fullName">
                        Full Name <span className="req-asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-fullName"
                        name="fullName"
                        placeholder="e.g. Evelyn Harper"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`contact-input ${errors.fullName ? 'field-error' : ''}`}
                      />
                      {errors.fullName && (
                        <div className="error-message">
                          <AlertCircle size={14} />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="contact-email">
                        Email Address <span className="req-asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="evelyn@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`contact-input ${errors.email ? 'field-error' : ''}`}
                      />
                      {errors.email && (
                        <div className="error-message">
                          <AlertCircle size={14} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Telephone & Subject */}
                  <div className="form-grid-2">
                    <div className="form-field-group">
                      <label htmlFor="contact-phone">
                        Telephone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        placeholder="+1 (555) 234-5678"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="contact-input"
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="contact-subject">
                        Subject / Inquiry Type <span className="req-asterisk">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`contact-input contact-select ${errors.subject ? 'field-error' : ''}`}
                      >
                        <option value="">-- Please Select a Subject --</option>
                        <option value="General Dining Inquiry">General Dining Inquiry</option>
                        <option value="Table Reservation Request">Table Reservation Request</option>
                        <option value="Private Event & Banquet Catering">Private Event & Banquet Catering</option>
                        <option value="Dietary & Allergy Inquiries">Dietary & Allergy Inquiries</option>
                        <option value="Chef Marco Rossi Feedback">Feedback for Culinary Team</option>
                      </select>
                      {errors.subject && (
                        <div className="error-message">
                          <AlertCircle size={14} />
                          <span>{errors.subject}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="form-field-group">
                    <label htmlFor="contact-message">
                      Your Message <span className="req-asterisk">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Please let us know how we can assist you, dates, number of guests, or special arrangements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`contact-input contact-textarea ${errors.message ? 'field-error' : ''}`}
                    />
                    {errors.message && (
                      <div className="error-message">
                        <AlertCircle size={14} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block contact-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Column: Map & Quick Reservation */}
            <div className="contact-sidebar">
              {/* Location Card / Map Simulation */}
              <div className="sidebar-map-card">
                <div className="map-visual-header">
                  <div className="map-pin-indicator">
                    <MapPin size={24} className="map-pin-icon" />
                    <span>Savoria Bistro & Lounge</span>
                  </div>
                </div>

                <div className="map-card-body">
                  <h4>Prime Culinary Heritage Location</h4>
                  <p>
                    Nestled in the historic district, Savoria Bistro is conveniently accessible
                    via all major subway routes and includes complimentary valet parking for evening diners.
                  </p>
                  <ul className="map-perks-list">
                    <li>✓ Valet parking available from 5:30 PM</li>
                    <li>✓ Wheelchair accessible entrance & dining salons</li>
                    <li>✓ 3-minute stroll from Central Heritage Station</li>
                  </ul>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Quick Book Callout */}
              <div className="sidebar-reservation-callout">
                <Sparkles size={28} className="callout-icon" />
                <h3>Planning Dinner Tonight?</h3>
                <p>Reserve directly online to receive instantaneous table confirmation.</p>
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => setIsReservationOpen(true)}
                >
                  <Calendar size={18} />
                  <span>Reserve Table Online</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="section-padding bg-alt faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about reservations, dress code, and catering.
            </p>
          </div>

          <div className="faq-accordion-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <ChevronDown size={20} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
