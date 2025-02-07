import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
 // Import Bootstrap Icons

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Brand with Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/freshfarmhub.jpg" alt="FreshFarm" height="40" />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-success" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/products">Products</Link>
            </li>
          </ul>

          {/* Right Side Icons (Cart & Login) */}
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-secondary me-2">
              <i className="bi bi-cart"></i> Cart
            </Link>
            <Link to="/login" className="btn btn-outline-primary">
              <i className="bi bi-person-circle"></i> Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
