import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove item from cart
  const handleRemoveFromCart = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove item at index
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">🛒 Your Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-center">No items in your cart yet.</p>
      ) : (
        <div className="row">
          {cart.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="fw-bold text-primary">Price: ${product.price}</p>
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    className="btn btn-danger"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
