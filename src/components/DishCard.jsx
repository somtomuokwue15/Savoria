import React, { useState } from 'react';
import { Star, Clock, Flame, ShoppingBag, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const DishCard = ({ dish }) => {
  const { addToCart, cartItems } = useCart();
  const [imageLoaded, setImageLoaded] = useState(true);

  // Check if item is already in cart to display its current quantity
  const cartItem = cartItems.find((item) => item.id === dish.id);
  const inCartQty = cartItem ? cartItem.quantity : 0;

  return (
    <div className="dish-card">
      {/* Dish Image Container */}
      <div className="dish-image-wrapper">
        <img
          src={imageLoaded ? dish.image : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}
          alt={dish.name}
          className="dish-image"
          onError={() => setImageLoaded(false)}
          loading="lazy"
        />

        {/* Badge overlay */}
        {dish.badge && (
          <span className="dish-badge-overlay">{dish.badge}</span>
        )}

        {/* Rating pill */}
        <div className="dish-rating-pill">
          <Star size={13} className="star-icon" fill="#F59E0B" color="#F59E0B" />
          <span>{dish.rating.toFixed(1)}</span>
          <span className="reviews-sub">({dish.reviewsCount})</span>
        </div>
      </div>

      {/* Dish Content Body */}
      <div className="dish-content">
        <div className="dish-header-row">
          <h3 className="dish-title">{dish.name}</h3>
          <span className="dish-price">${dish.price.toFixed(2)}</span>
        </div>

        <p className="dish-description">{dish.description}</p>

        {/* Dietary / Meta tags */}
        <div className="dish-tags-row">
          {dish.dietary &&
            dish.dietary.map((tag, idx) => (
              <span key={idx} className="dietary-tag">
                {tag}
              </span>
            ))}
        </div>

        <div className="dish-meta-info">
          {dish.prepTime && (
            <span className="meta-item">
              <Clock size={13} />
              {dish.prepTime}
            </span>
          )}
          {dish.calories && (
            <span className="meta-item">
              <Flame size={13} />
              {dish.calories}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="dish-action-row">
          <button
            type="button"
            className={`btn-add-cart ${inCartQty > 0 ? 'in-cart' : ''}`}
            onClick={() => addToCart(dish)}
            aria-label={`Add ${dish.name} to order`}
          >
            {inCartQty > 0 ? (
              <>
                <Check size={16} />
                <span>Added ({inCartQty})</span>
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                <span>Add to Order</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
