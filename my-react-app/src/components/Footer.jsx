import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              FarmerProducts is committed to connecting local farmers with
              customers. We deliver fresh and organic produce straight from the
              farm to your table.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Hariyancheruvu, CKPalli Mandal, Sri Sathya Sai District
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> bellamdeva98@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> 6281530217
            </p>
          </div>
        </div>

        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">© 2025 FarmerProducts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
