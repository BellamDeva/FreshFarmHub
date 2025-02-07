import React, { useState } from "react";
import axios from "axios";

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend
      const response = await axios.post("http://localhost:5000/api/products", product);
      setMessage("Product added successfully!");
      setProduct({ name: "", price: "", description: "", image: "" }); // Reset form
    } catch (error) {
      setMessage("Error adding product.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
      {message && <p style={{ color: "green", textAlign: "center" }}>{message}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          required
          rows="4"
          style={{ padding: "10px", fontSize: "16px" }}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
