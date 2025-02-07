import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/ProductList'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Register from './pages/Register'
import AddProductPage from './pages/AddProductPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<AddProductPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
