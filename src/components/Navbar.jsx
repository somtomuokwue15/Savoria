import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Utensils, ShoppingBag, Menu, X, Calendar, PhoneCall } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantData';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsCartOpen, setIsReservationOpen } = useCart();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/menu', label: 'Our Menu' },
    { to: '/contact', label: 'Contact' }
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      {/* Top micro bar for quick announcement / contact */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <div className="top-banner-left">
            <span>✨ Seasonal Truffle & Wine Pairing Tasting Menu Available</span>
          </div>
          <div className="top-banner-right">
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="top-banner-link">
              <PhoneCall size={13} />
              <span>Call Us: {RESTAURANT_INFO.phone}</span>
            </a>
            <span className="top-divider">|</span>
            <span className="top-hours">Open Today: 12:00 PM - 11:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
            <div className="logo-icon-wrapper">
              <Utensils className="logo-icon" size={24} />
            </div>
            <div className="logo-text-group">
              <span className="brand-name">SAVORIA</span>
              <span className="brand-subtext">BISTRO & LOUNGE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="desktop-nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            {/* Table Reservation CTA */}
            <button
              type="button"
              className="btn btn-outline nav-reserve-btn"
              onClick={() => setIsReservationOpen(true)}
            >
              <Calendar size={16} />
              <span>Reserve Table</span>
            </button>

            {/* Shopping Cart Icon */}
            <button
              type="button"
              className="cart-toggle-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping cart with ${totalCount} items`}
            >
              <ShoppingBag size={20} />
              {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-menu-actions">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  closeMobileMenu();
                  setIsReservationOpen(true);
                }}
              >
                <Calendar size={18} />
                <span>Reserve a Table</span>
              </button>

              <button
                type="button"
                className="btn btn-outline btn-block"
                onClick={() => {
                  closeMobileMenu();
                  setIsCartOpen(true);
                }}
              >
                <ShoppingBag size={18} />
                <span>View Order ({totalCount} items)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
