import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle } from "react-icons/fa";

const UserAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert("Logged in successfully!");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-primary">User Authentication</h2>
      <div className="mt-4">
        <FaUserCircle size={80} className="text-secondary" />
        <div className="mt-3">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="btn btn-success">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAuth;