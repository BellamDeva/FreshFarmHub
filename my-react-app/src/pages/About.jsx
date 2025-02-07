import React from 'react';

const About = () => {
  return (
    <div
      style={{
        backgroundColor: '#f0f8ff', // Light blue background
        color: '#333', // Dark text color
        padding: '2rem',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: '2rem auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#2a9d8f', marginBottom: '1rem' }}>About Us</h1>
      <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
        Welcome to <strong>FarmerProducts</strong>, your one-stop destination for fresh and organic produce. 
        We connect local farmers with customers to deliver quality products straight from the farm to your table. 
        Our mission is to promote sustainable farming and support local communities.
      </p>
      <button
        style={{
          backgroundColor: '#e76f51',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '1rem',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#d6453b')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#e76f51')}
      >
        Learn More
      </button>
    </div>
  );
};

export default About;
