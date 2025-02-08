import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/ProductList';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from './pages/Register';
import AddProductPage from './pages/AddProductPage';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AddProductPage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
};

export default App;
