import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    tax,
    deliveryFee,
    grandTotal
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate real order processing
    setTimeout(() => {
      const orderNumber = 'SAV-' + Math.floor(100000 + Math.random() * 900000);
      setOrderConfirmed({
        orderId: orderNumber,
        itemsCount: cartItems.reduce((acc, i) => acc + i.quantity, 0),
        total: grandTotal.toFixed(2),
        estimatedTime: '30-40 minutes'
      });
      clearCart();
      setIsCheckingOut(false);
    }, 1200);
  };

  const closeDrawer = () => {
    setIsCartOpen(false);
    setOrderConfirmed(null);
  };

  const freeDeliveryThreshold = 60;
  const amountToFreeDelivery = freeDeliveryThreshold - subtotal;

  return (
    <div className="cart-drawer-overlay" onClick={closeDrawer}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title-group">
            <ShoppingBag size={22} className="cart-header-icon" />
            <h3 className="cart-drawer-title">Your Order</h3>
            <span className="cart-items-counter">
              ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
            </span>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={closeDrawer}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Delivery Bar */}
        {cartItems.length > 0 && !orderConfirmed && (
          <div className="delivery-progress-banner">
            {amountToFreeDelivery > 0 ? (
              <p>
                Add <strong>${amountToFreeDelivery.toFixed(2)}</strong> more for <strong>Free Delivery</strong>!
              </p>
            ) : (
              <p className="free-delivery-unlocked">
                🎉 Congratulations! You have unlocked <strong>Free Delivery</strong>!
              </p>
            )}
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Body Area */}
        <div className="cart-drawer-body">
          {orderConfirmed ? (
            /* Order Placed Success View */
            <div className="order-success-card">
              <div className="success-icon-wrapper">
                <CheckCircle size={56} className="success-check-icon" />
              </div>
              <h3>Order Confirmed!</h3>
              <p className="order-id-label">
                Order Tracking #: <strong>{orderConfirmed.orderId}</strong>
              </p>
              <p className="success-detail-text">
                Our kitchen chefs have received your order! We are preparing your dishes with fresh artisanal ingredients.
              </p>
              <div className="order-meta-box">
                <div className="meta-row">
                  <span>Estimated Delivery / Pickup:</span>
                  <strong>{orderConfirmed.estimatedTime}</strong>
                </div>
                <div className="meta-row">
                  <span>Total Amount Paid:</span>
                  <strong>${orderConfirmed.total}</strong>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                  closeDrawer();
                  navigate('/menu');
                }}
              >
                Back to Menu
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty State */
            <div className="cart-empty-state">
              <div className="empty-cart-icon-wrap">
                <ShoppingBag size={52} />
              </div>
              <h4>Your order is currently empty</h4>
              <p>Explore our gourmet menu and savor our chef-curated appetizers, mains, and desserts.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  closeDrawer();
                  navigate('/menu');
                }}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            /* List of Cart Items */
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <span className="cart-item-unit-price">${item.price.toFixed(2)} each</span>

                    <div className="cart-quantity-controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-actions">
                    <span className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Area with Summary & Checkout */}
        {cartItems.length > 0 && !orderConfirmed && (
          <div className="cart-drawer-footer">
            <div className="order-summary-box">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Estimated Tax (8.875%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery & Packaging</span>
                <span>{deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span className="grand-total-val">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <span>Securing Your Order...</span>
              ) : (
                <>
                  <span>Place Order • ${grandTotal.toFixed(2)}</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
