import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router's useNavigate hook
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // React Router's navigation hook

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password }); // Replace with your API endpoint
      console.log(response.data); // Log the response to ensure successful login
      navigate("/"); // Redirect to the home page on successful login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again."); // Display error message
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">🔑 Login</h2>
      <form className="mx-auto w-50 p-4 border rounded shadow" onSubmit={handleLogin}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>

      <p className="text-center mt-3">
        Don't have an account? <a href="/register" className="text-success">Register here</a>
      </p>
    </div>
  );
};

export default Login;
