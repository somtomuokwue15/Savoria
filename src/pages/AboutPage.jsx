import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  UtensilsCrossed,
  HeartHandshake,
  Sparkles,
  Calendar,
  CheckCircle2,
  Award,
  Users,
  Compass,
  Wine
} from 'lucide-react';
import { RESTAURANT_INFO, CORE_VALUES, CHEFS } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

const PHILOSOPHY_TABS = [
  {
    id: 'sourcing',
    title: 'Farm-to-Table Sourcing',
    icon: Leaf,
    headline: 'Only the Freshest, Ethically Harvested Ingredients',
    content:
      'We work directly with 14 family-owned organic farms across the region. Every sunrise brings crates of crisp heirloom root vegetables, line-caught Atlantic seafood, and artisan cheeses from certified sustainable creameries. If it is not in season, it does not enter our pantry.',
    stats: '100% Organic Local Partners'
  },
  {
    id: 'craft',
    title: 'The Kitchen Method',
    icon: UtensilsCrossed,
    headline: 'Time-Honored Techniques & Modern Precision',
    content:
      'Our kitchen combines old-world French saucier techniques and open-wood embers with modern precision sous-vide cooking. Stocks simmer for 48 hours, doughs undergo 72-hour cold fermentation, and our dry-aged meats are supervised daily in our custom Himalayan salt-brick room.',
    stats: '48-Hour Simmered Demi-Glace'
  },
  {
    id: 'cellar',
    title: 'The Wine Cellar',
    icon: Wine,
    headline: 'Curated Vintages From Legendary Terroirs',
    content:
      'Our Master Sommelier David Chen has assembled a 350-label temperature-controlled cellar ranging from Biodynamic Loire Valley whites to rare Barolos and Napa Valley cult cabernets. Every main course has an expertly paired vintage recommendation.',
    stats: '350+ Cellar Labels'
  },
  {
    id: 'green',
    title: 'Zero Waste Commitment',
    icon: Sparkles,
    headline: 'Respecting the Earth at Every Turn',
    content:
      'We run a comprehensive composting program that returns food scraps to the very farms that supply us. Our kitchen uses 100% renewable energy, all takeout packaging is biodegradable plant fiber, and cooking oils are recycled into sustainable biofuel.',
    stats: 'Zero Landfill Food Waste'
  }
];

const AboutPage = () => {
  const { setIsReservationOpen } = useCart();
  const [activePhilosophyTab, setActivePhilosophyTab] = useState('sourcing');

  const selectedPhilosophy = PHILOSOPHY_TABS.find((t) => t.id === activePhilosophyTab);

  return (
    <div className="about-page">
      {/* 1. ABOUT HERO */}
      <section className="page-hero about-hero">
        <div className="hero-overlay" />
        <div className="container page-hero-content">
          <span className="page-hero-kicker">Our Heritage & Passion</span>
          <h1 className="page-hero-title">Crafting Memories Through Culinary Excellence</h1>
          <p className="page-hero-subtitle">
            Discover the narrative, people, and sustainable philosophy behind {RESTAURANT_INFO.name}.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY & HISTORY */}
      <section className="section-padding story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-kicker">The Savoria Journey</span>
              <h2 className="section-title">From a Humble Dream to an Acclaimed Dining Room</h2>
              <p className="story-paragraph">
                Savoria Bistro was born in the spring of 2018 under the vision of Executive Chef Marco Rossi. Having honed his craft for two decades across Michelin-starred dining rooms in Florence, Paris, and Manhattan, Chef Marco envisioned a space that stripped away pretense while elevating every single ingredient to its highest expression.
              </p>
              <p className="story-paragraph">
                What began as a cozy 24-seat tavern in the historic Culinary Heritage Quarter quickly grew into a beloved gastronomic sanctuary. Today, Savoria stands as a tribute to passionate craftsmanship, heartfelt hospitality, and sustainable dining.
              </p>

              <div className="story-milestones">
                <div className="milestone-item">
                  <span className="milestone-year">2018</span>
                  <div className="milestone-info">
                    <h4>The Beginning</h4>
                    <p>First doors opened with 6 tables and an open wood-fired hearth.</p>
                  </div>
                </div>
                <div className="milestone-item">
                  <span className="milestone-year">2021</span>
                  <div className="milestone-info">
                    <h4>Michelin Recognition</h4>
                    <p>Honored with the Michelin Guide selection for outstanding culinary excellence.</p>
                  </div>
                </div>
                <div className="milestone-item">
                  <span className="milestone-year">2024</span>
                  <div className="milestone-info">
                    <h4>100% Farm Direct</h4>
                    <p>Achieved complete zero-landfill kitchen status and 14 farm partnerships.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Chefs prepping artisanal dishes in kitchen"
                className="story-main-img"
              />
              <div className="story-quote-card">
                <p>
                  "Food is not mere sustenance; it is a sacred bridge connecting the farmer's soil to the human heart."
                </p>
                <span>— Chef Marco Rossi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & OBJECTIVES */}
      <section className="section-padding bg-alt mission-vision-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Purpose & Direction</span>
            <h2 className="section-title">Our Mission, Vision & Core Values</h2>
            <p className="section-subtitle">
              Every dish we serve and every table we set is driven by our foundational pillars.
            </p>
          </div>

          <div className="mission-vision-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon-wrap">
                <Compass size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide an extraordinary dining sanctuary where seasonal integrity, master culinary technique, and genuine human warmth unite to create cherished memories for every guest.
              </p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon-wrap">
                <Sparkles size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To pioneer a new paradigm of fine dining where uncompromising gastronomic luxury coexists in perfect harmony with ethical farming, zero waste, and ecological stewardship.
              </p>
            </div>
          </div>

          {/* 4 Core Value Cards */}
          <div className="values-grid">
            {CORE_VALUES.map((val) => (
              <div key={val.id} className="value-card">
                <div className="value-icon-box">
                  {val.id === 1 && <Leaf size={22} />}
                  {val.id === 2 && <UtensilsCrossed size={22} />}
                  {val.id === 3 && <HeartHandshake size={22} />}
                  {val.id === 4 && <Sparkles size={22} />}
                </div>
                <h4>{val.title}</h4>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE PHILOSOPHY TABS */}
      <section className="section-padding philosophy-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">Interactive Exploration</span>
            <h2 className="section-title">Our Four Pillars of Gastronomy</h2>
            <p className="section-subtitle">
              Click through the interactive tabs below to examine how we maintain our world-class standard.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="philosophy-tabs-bar">
            {PHILOSOPHY_TABS.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`philosophy-tab-btn ${activePhilosophyTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActivePhilosophyTab(tab.id)}
                >
                  <TabIcon size={18} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Display Panel */}
          {selectedPhilosophy && (
            <div className="philosophy-panel-card">
              <div className="panel-text">
                <span className="panel-badge">{selectedPhilosophy.stats}</span>
                <h3>{selectedPhilosophy.headline}</h3>
                <p>{selectedPhilosophy.content}</p>
                <div className="panel-features-checklist">
                  <div className="checklist-item">
                    <CheckCircle2 size={16} />
                    <span>Rigorous quality inspection before morning prep</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={16} />
                    <span>Zero preservatives, artificial coloring, or trans fats</span>
                  </div>
                  <div className="checklist-item">
                    <CheckCircle2 size={16} />
                    <span>Chef-guided seasonal recipe rotations</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. CULINARY TEAM / MASTER CHEFS */}
      <section className="section-padding bg-alt team-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-kicker">The Artisans</span>
            <h2 className="section-title">Meet Our Executive Culinary Masters</h2>
            <p className="section-subtitle">
              The creative visionaries, pastry artists, and sommeliers orchestrating your meal.
            </p>
          </div>

          <div className="chefs-grid">
            {CHEFS.map((chef) => (
              <div key={chef.id} className="chef-card">
                <div className="chef-image-wrap">
                  <img src={chef.image} alt={chef.name} className="chef-img" />
                  <span className="chef-experience-badge">{chef.experience}</span>
                </div>
                <div className="chef-info">
                  <h3 className="chef-name">{chef.name}</h3>
                  <span className="chef-role">{chef.role}</span>
                  <p className="chef-bio">{chef.bio}</p>
                  <div className="chef-specialty-box">
                    <strong>Specialty:</strong>
                    <span>{chef.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="about-cta-section text-center">
        <div className="container">
          <h2>Ready to Taste the Savoria Difference?</h2>
          <p>
            Experience the culinary artistry of Chef Marco Rossi and our award-winning team tonight.
          </p>
          <div className="about-cta-btns">
            <Link to="/menu" className="btn btn-primary btn-lg">
              <span>Explore Our Menu</span>
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
