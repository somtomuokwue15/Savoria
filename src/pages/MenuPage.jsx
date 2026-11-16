import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ArrowUpDown,
  ShoppingBag,
  Sparkles,
  Utensils,
  X,
  ChefHat
} from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import DishCard from '../components/DishCard';
import { useCart } from '../context/CartContext';

const MenuPage = () => {
  const { setIsCartOpen, totalCount } = useCart();

  // State management for filtering, search, and sorting
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'rating'

  // Memoized filtered and sorted menu list using JavaScript array methods (.filter, .sort)
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      // Search query filter (matches name, description, or dietary tags)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.dietary && item.dietary.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // 'featured' default: specials first, then id
      if (a.isSpecial && !b.isSpecial) return -1;
      if (!a.isSpecial && b.isSpecial) return 1;
      return a.id - b.id;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="menu-page">
      {/* 1. MENU HERO */}
      <section className="page-hero menu-hero">
        <div className="hero-overlay" />
        <div className="container page-hero-content">
          <span className="page-hero-kicker">Artisanal Gastronomy</span>
          <h1 className="page-hero-title">Our Seasonal Menu</h1>
          <p className="page-hero-subtitle">
            Every dish is thoughtfully composed with seasonal farm produce, pristine seafood,
            and prime aged meats prepared to order by our culinary brigade.
          </p>
        </div>
      </section>

      {/* 2. MENU CONTROLS & FILTER SECTION */}
      <section className="menu-controls-section">
        <div className="container">
          <div className="menu-controls-wrapper">
            {/* Search Input */}
            <div className="menu-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search dishes, ingredients, or dietary tags (e.g., Truffle, Sea Bass, Vegan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Search menu"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="menu-sort-box">
              <ArrowUpDown size={16} className="sort-icon" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
                aria-label="Sort dishes"
              >
                <option value="featured">Featured & Chef Specials</option>
                <option value="rating">Highest Rated ⭐</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs-container">
            <div className="category-tabs-scroll">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Cart Quick Toggle Button */}
            <button
              type="button"
              className="quick-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart order drawer"
            >
              <ShoppingBag size={18} />
              <span>Cart ({totalCount})</span>
            </button>
          </div>

          {/* Filter Status & Match Counter */}
          <div className="filter-status-bar">
            <p className="filter-count-text">
              Showing <strong>{filteredDishes.length}</strong> of <strong>{MENU_ITEMS.length}</strong> culinary creations
              {selectedCategory !== 'all' && (
                <span className="active-tag-badge">
                  Category: {CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                </span>
              )}
              {searchQuery && (
                <span className="active-tag-badge">
                  Search: "{searchQuery}"
                </span>
              )}
            </p>

            {(selectedCategory !== 'all' || searchQuery || sortBy !== 'featured') && (
              <button type="button" className="reset-filter-btn" onClick={clearFilters}>
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. MENU DISHES GRID */}
      <section className="section-padding menu-grid-section">
        <div className="container">
          {filteredDishes.length === 0 ? (
            /* No Results Found State */
            <div className="empty-results-box">
              <div className="empty-icon-wrapper">
                <ChefHat size={56} />
              </div>
              <h3>No Culinary Matches Found</h3>
              <p>
                We could not find any dishes matching "{searchQuery}". Try searching for another ingredient like "steak", "truffle", or "chocolate".
              </p>
              <button type="button" className="btn btn-primary" onClick={clearFilters}>
                View All Dishes
              </button>
            </div>
          ) : (
            /* Responsive Grid using Array.map() with Reusable DishCard Components */
            <div className="dishes-grid">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. DIETARY NOTICE BANNER */}
      <section className="menu-notice-section">
        <div className="container notice-container">
          <div className="notice-icon-wrap">
            <Utensils size={24} />
          </div>
          <div className="notice-text">
            <h4>Bespoke Dietary Accommodations</h4>
            <p>
              Our culinary team is delighted to prepare dairy-free, celiac-safe gluten-free, or vegan interpretations of our signature dishes upon request. Please notify your server or include a note during your checkout or table reservation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
