import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { fullName, email, password, confirmPassword } = formData;
  const navigate = useNavigate(); // To redirect after successful registration

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        fullName,
        email,
        password,
      });

      // Show success message and reset form
      setSuccessMessage(res.data.message || 'Registered successfully!');
      setErrorMessage('');
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });

      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate('/login'); // Change '/login' to the actual login route in your app
      }, 2000);

    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Registration failed!');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success">📝 Register</h2>
      <form className="mx-auto w-50 p-4 border rounded shadow" onSubmit={handleSubmit}>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Enter full name"
            value={fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <p className="text-center mt-3">
        Already have an account? <a href="/login" className="text-primary">Login</a>
      </p>
    </div>
  );
};

export default Register;
