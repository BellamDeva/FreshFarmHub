import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); // Replace with your API endpoint
        setProducts(response.data);
      } catch (error) {
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  const handleEatNow = (product) => {
    alert(`Enjoy your ${product.name}!`);
  };

  return (
    <div>
      <h2>All Products</h2>
      {error && <p>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
            <button
              onClick={() => handleEatNow(product)}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#ff5722",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Eat Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
