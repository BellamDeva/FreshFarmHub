import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider> {/* Wrap App with AuthProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
