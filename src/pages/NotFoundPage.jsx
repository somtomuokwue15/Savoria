import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container not-found-content text-center">
        <div className="not-found-icon-wrap">
          <Utensils size={64} />
        </div>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found on Our Menu</h2>
        <p className="not-found-text">
          The culinary page you are looking for may have been moved, renamed, or is currently off-season.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            <span>Return to Home</span>
          </Link>
          <Link to="/menu" className="btn btn-outline btn-lg">
            <span>Browse Full Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
