import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); // API endpoint
        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  const handleEatNow = () => {
    navigate("/payment"); // Navigate to payment page
  };

  const handleOrderNow = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart
    cart.push(product); // Add new product
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Products</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold text-primary">Price: ${product.price}</p>

                <div className="d-flex justify-content-between">
                  <button onClick={handleEatNow} className="btn btn-warning">
                    🍽️ Eat Now
                  </button>
                  <button
                    onClick={() => handleOrderNow(product)}
                    className="btn btn-success"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
