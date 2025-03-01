import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  // Calculate total price
  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  // Remove item from cart
  const handleRemoveFromCart = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove item at index
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    calculateTotal(updatedCart);
  };

  // Handle Buy All
  const handleBuyAll = () => {
     // Clear the cart
    localStorage.removeItem("cart"); // Remove from localStorage
    setTotalPrice(0);
    navigate("/payment");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">🛒 Your Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-center">No items in your cart yet.</p>
      ) : (
        <>
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
          <div className="text-center mt-4">
            <h4 className="fw-bold">Total Price: ${totalPrice.toFixed(2)}</h4>
            <button
              onClick={handleBuyAll}
              className="btn btn-success btn-lg"
              disabled={cart.length === 0}
            >
              ✅ Buy All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
