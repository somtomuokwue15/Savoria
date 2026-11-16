import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ReservationModal = () => {
  const { isReservationOpen, setIsReservationOpen } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    seatingArea: 'Main Dining Salon',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  if (!isReservationOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid telephone number.';
    }
    if (!formData.date) {
      errs.date = 'Please select a reservation date.';
    }
    if (!formData.time) {
      errs.time = 'Please select a preferred seating time.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const ref = 'RES-' + Math.floor(1000 + Math.random() * 9000);
    setBookingReference(ref);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsReservationOpen(false);
    setIsSubmitted(false);
    setErrors({});
  };

  // Get tomorrow's date string for min date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-dialog reservation-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close reservation modal"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="reservation-success-box">
            <div className="reservation-success-icon-wrap">
              <CheckCircle size={56} className="text-success" />
            </div>
            <h2>Table Reserved!</h2>
            <p className="res-code-highlight">
              Reservation Code: <strong>{bookingReference}</strong>
            </p>
            <p className="res-thank-you">
              Thank you, <strong>{formData.fullName}</strong>. A confirmation SMS & email have been dispatched to <strong>{formData.email}</strong>.
            </p>

            <div className="reservation-summary-card">
              <div className="summary-item">
                <Calendar size={18} />
                <span>Date: <strong>{formData.date}</strong></span>
              </div>
              <div className="summary-item">
                <Clock size={18} />
                <span>Time: <strong>{formData.time}</strong></span>
              </div>
              <div className="summary-item">
                <Users size={18} />
                <span>Party Size: <strong>{formData.guests} Guest(s)</strong></span>
              </div>
              <div className="summary-item">
                <MapPin size={18} />
                <span>Area: <strong>{formData.seatingArea}</strong></span>
              </div>
            </div>

            <button type="button" className="btn btn-primary btn-block" onClick={handleClose}>
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header-section">
              <span className="modal-kicker">Fine Dining Experience</span>
              <h2 className="modal-title">Reserve Your Table</h2>
              <p className="modal-subtitle">
                Join us for an unforgettable culinary journey at Savoria Bistro.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="reservation-form" noValidate>
              <div className="form-grid-2">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="res-fullName">Full Name *</label>
                  <input
                    type="text"
                    id="res-fullName"
                    name="fullName"
                    placeholder="e.g. Alexander Vance"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                  />
                  {errors.fullName && <span className="error-hint">{errors.fullName}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="res-email">Email Address *</label>
                  <input
                    type="email"
                    id="res-email"
                    name="email"
                    placeholder="alexander@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && <span className="error-hint">{errors.email}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                {/* Telephone */}
                <div className="form-group">
                  <label htmlFor="res-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="res-phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                  />
                  {errors.phone && <span className="error-hint">{errors.phone}</span>}
                </div>

                {/* Guests */}
                <div className="form-group">
                  <label htmlFor="res-guests">Number of Guests *</label>
                  <select
                    id="res-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="1">1 Person (Solo Dining)</option>
                    <option value="2">2 Persons (Couple Table)</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons (Standard Booth)</option>
                    <option value="5">5 Persons</option>
                    <option value="6">6 Persons (Family Table)</option>
                    <option value="8">8 Persons (Large Party)</option>
                    <option value="10">10+ Persons (Private Banquet)</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-3">
                {/* Date */}
                <div className="form-group">
                  <label htmlFor="res-date">Reservation Date *</label>
                  <input
                    type="date"
                    id="res-date"
                    name="date"
                    min={minDate}
                    value={formData.date}
                    onChange={handleChange}
                    className={`form-input ${errors.date ? 'input-error' : ''}`}
                  />
                  {errors.date && <span className="error-hint">{errors.date}</span>}
                </div>

                {/* Time */}
                <div className="form-group">
                  <label htmlFor="res-time">Seating Time *</label>
                  <select
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="17:30">05:30 PM (Early Dinner)</option>
                    <option value="18:30">06:30 PM (Prime Dinner)</option>
                    <option value="19:30">07:30 PM (Prime Dinner)</option>
                    <option value="20:30">08:30 PM (Late Dinner)</option>
                    <option value="21:30">09:30 PM (Late Lounge)</option>
                  </select>
                </div>

                {/* Seating Area */}
                <div className="form-group">
                  <label htmlFor="res-seatingArea">Dining Area</label>
                  <select
                    id="res-seatingArea"
                    name="seatingArea"
                    value={formData.seatingArea}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Main Dining Salon">Main Dining Salon</option>
                    <option value="Candlelit Garden Patio">Candlelit Garden Patio</option>
                    <option value="Chef's Tasting Counter">Chef's Tasting Counter</option>
                    <option value="Private Mezzanine">Private Wine Mezzanine</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="form-group">
                <label htmlFor="res-specialRequests">Dietary Restrictions or Special Occasion (Optional)</label>
                <textarea
                  id="res-specialRequests"
                  name="specialRequests"
                  rows="2"
                  placeholder="e.g. Celebrating 10th anniversary, vegetarian guest, quiet corner preferred..."
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block modal-submit-btn">
                Confirm Reservation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;
