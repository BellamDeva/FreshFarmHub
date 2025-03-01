import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose Payment Method</h2>
      <div className="card p-4 shadow">
        {/* Payment Method Selection */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${paymentMethod === "card" ? "active" : ""}`}
              onClick={() => setPaymentMethod("card")}
            >
              Card Payment
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${paymentMethod === "upi" ? "active" : ""}`}
              onClick={() => setPaymentMethod("upi")}
            >
              UPI
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${paymentMethod === "netbanking" ? "active" : ""}`}
              onClick={() => setPaymentMethod("netbanking")}
            >
              Net Banking
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${paymentMethod === "wallet" ? "active" : ""}`}
              onClick={() => setPaymentMethod("wallet")}
            >
              Wallets
            </button>
          </li>
        </ul>

        {/* Payment Forms */}
        {paymentMethod === "card" && (
          <div>
            <h5>Card Payment</h5>
            <input type="text" className="form-control mb-2" placeholder="Card Number" />
            <input type="text" className="form-control mb-2" placeholder="MM/YY" />
            <input type="text" className="form-control mb-2" placeholder="CVV" />
          </div>
        )}

        {paymentMethod === "upi" && (
          <div>
            <h5>UPI Payment</h5>
            <input type="text" className="form-control mb-2" placeholder="Enter UPI ID" />
          </div>
        )}

        {paymentMethod === "netbanking" && (
          <div>
            <h5>Net Banking</h5>
            <select className="form-control mb-2">
              <option>Select Bank</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>SBI Bank</option>
            </select>
          </div>
        )}

        {paymentMethod === "wallet" && (
          <div>
            <h5>Wallet Payment</h5>
            <select className="form-control mb-2">
              <option>Select Wallet</option>
              <option>Paytm</option>
              <option>Google Pay</option>
              <option>PhonePe</option>
            </select>
          </div>
        )}

        {/* Pay Now Button */}
        <button className="btn btn-primary w-100 mt-3">Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
