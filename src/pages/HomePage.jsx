import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Utensils,
  Sparkles,
  Award,
  ArrowRight,
  Clock,
  Star,
  ChevronRight,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { RESTAURANT_INFO, TESTIMONIALS } from '../data/restaurantData';
import { MENU_ITEMS } from '../data/menuData';
import DishCard from '../components/DishCard';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const { setIsReservationOpen } = useCart();
  const [activeTab, setActiveTab] = useState('all');

  // Filter 4 featured specials for the homepage interactive highlight
  const featuredSpecials = MENU_ITEMS.filter((item) => item.isSpecial).slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Award-Winning Modern Gastronomy</span>
          </div>

          <h1 className="hero-title">
            Where Culinary Artistry Meets <span className="highlight-text">Heartfelt Savor</span>
          </h1>

          <p className="hero-subtitle">
            Welcome to <strong>{RESTAURANT_INFO.name}</strong>. Step inside an oasis of artisanal flavors,
            featuring sustainably harvested farm-fresh produce, dry-aged cuts, and sommelier-curated vintages.
          </p>

          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary btn-lg">
              <span>Explore Our Menu</span>
              <ArrowRight size={18} />
            </Link>

            <button
              type="button"
              className="btn btn-outline-light btn-lg"
              onClick={() => setIsReservationOpen(true)}
            >
              <Calendar size={18} />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
              <span>4.9 / 5.0 Rating (2,400+ Reviews)</span>
            </div>
            <div className="trust-divider">•</div>
            <div className="trust-item">
              <Award size={16} />
              <span>Michelin Guide Selected 2024</span>
            </div>
            <div className="trust-divider">•</div>
            <div className="trust-item">
              <Clock size={16} />
              <span>Daily Fresh Seasonal Menu</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="stats-strip">
        <div className="container stats-container">
          {RESTAURANT_INFO.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <h3 className="stat-number">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTRODUCTION / ABOUT TEASER */}
      <section className="intro-section section-padding">
        <div className="container intro-grid">
          <div className="intro-text-column">
            <span className="section-kicker">Welcome to Savoria</span>
            <h2 className="section-title">An Authentic Epicurean Journey From Farm to Fork</h2>
            <p className="intro-lead">
              Founded on the belief that dining should nourish both the senses and the soul, Savoria Bistro unites classic European cooking traditions with bold modern culinary imagination.
            </p>
            <p className="intro-paragraph">
              We source organic heirloom vegetables from Hudson Valley family farms, sustainably caught wild seafood from coastal waters, and prime heritage meats aged in our private curing cellar.
            </p>

            <div className="intro-highlights-list">
              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4>100% Sustainable & Organic</h4>
                  <p>Certified pesticide-free produce and ethically raised meats only.</p>
                </div>
              </div>

              <div className="intro-highlight-item">
                <div className="highlight-icon">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4>Heartfelt Artisanal Hospitality</h4>
                  <p>Intimate tables, warm candlelight, and knowledgeable sommeliers.</p>
                </div>
              </div>
            </div>

            <div className="intro-buttons">
              <Link to="/about" className="btn btn-outline">
                <span>Discover Our Heritage & Chefs</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          <div className="intro-image-column">
            <div className="intro-image-collage">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                alt="Savoria Bistro dining room interior"
                className="collage-main-img"
              />
              <div className="collage-floating-card">
                <Utensils size={24} className="floating-icon" />
                <div>
                  <strong>Chef Marco Rossi</strong>
                  <p>Executive Head Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CHEF'S FEATURED SPECIALS */}
      <section className="specials-section section-padding bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Curated Culinary Highlights</span>
            <h2 className="section-title">Chef's Featured Daily Specials</h2>
            <p className="section-subtitle">
              Hand-selected daily by Chef Marco Rossi, highlighting today's rarest seasonal harvests.
            </p>
          </div>

          <div className="dishes-grid">
            {featuredSpecials.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>

          <div className="specials-footer-cta text-center">
            <p>Looking for appetizers, vegetarian options, or artisanal desserts?</p>
            <Link to="/menu" className="btn btn-primary btn-lg">
              <span>View Full Menu ({MENU_ITEMS.length} Dishes)</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TABLE RESERVATION BANNER */}
      <section className="reservation-cta-section">
        <div className="container reservation-cta-content">
          <div className="res-cta-text">
            <span className="badge-light">Book in Advance</span>
            <h2>An Evening of Sensory Indulgence Awaits</h2>
            <p>
              Whether it is a romantic candlelit anniversary, a relaxed family gathering,
              or a celebratory private dinner, let us set the stage for memories that endure.
            </p>
          </div>
          <div className="res-cta-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => setIsReservationOpen(true)}
            >
              <Calendar size={18} />
              <span>Reserve Your Table Now</span>
            </button>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              <span>Contact Concierge</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DINER TESTIMONIALS */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Patron Experiences</span>
            <h2 className="section-title">What Our Guests Are Saying</h2>
            <p className="section-subtitle">
              Read verified feedback from food critics, loyal patrons, and visiting gourmets.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="testimonial-comment">"{item.comment}"</p>
                <div className="testimonial-author">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                  <div>
                    <h4 className="author-name">{item.name}</h4>
                    <p className="author-title">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
