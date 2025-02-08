import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center py-5" style={{ background: '#f4f4f4' }}>
        <h1 className="display-4 text-primary">Welcome to FarmerProducts</h1>
        <p className="lead text-muted">Fresh, Organic, and Locally Sourced Products Direct to Your Door</p>
        <button className="btn btn-success btn-lg" onClick={handleShopNow}>Shop Now</button>
      </section>
      {/* Product Categories Section */}
      <section className="product-categories py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-4">Explore Our Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="fruit.jpg" className="card-img-top" alt="Fruits" />
                <div className="card-body">
                  <h5 className="card-title">Fresh Fruits</h5>
                  <p className="card-text">Pick from a variety of fresh, organic fruits.</p>
                  <button className="btn btn-primary" onClick ={handleShopNow}>Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="vegetables.jpg" className="card-img-top" alt="Vegetables" />
                <div className="card-body">
                  <h5 className="card-title">Organic Vegetables</h5>
                  <p className="card-text">Farm-fresh vegetables straight from the field.</p>
                  <button className="btn btn-primary" onClick ={handleShopNow}>Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="dairy.jpg" className="card-img-top" alt="Dairy" />
                <div className="card-body">
                  <h5 className="card-title">Fresh Dairy</h5>
                  <p className="card-text">From our farm to your table, fresh dairy products.</p>
                  <button className="btn btn-primary" onClick ={handleShopNow}>Explore</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-4">About Us</h2>
          <p className="text-center">We are committed to providing fresh, organic, and locally-sourced products. Our goal is to support sustainable farming while ensuring the best quality products for you.</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits py-5">
        <div className="container text-center">
          <h2 className="text-primary mb-4">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-leaf fa-3x text-success"></i>
              <h5 className="mt-3">Organic Products</h5>
              <p>All products are 100% organic, harvested without chemicals.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-truck fa-3x text-primary"></i>
              <h5 className="mt-3">Fast Delivery</h5>
              <p>We ensure quick and reliable delivery to your doorstep.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-users fa-3x text-warning"></i>
              <h5 className="mt-3">Customer Support</h5>
              <p>Our team is here to assist you with any inquiries you have.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>Follow Us:</p>
          <a href="https://facebook.com" className="text-white mx-2">Facebook</a>
          <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
          <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
