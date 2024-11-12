import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './components/Layouts/Header';
import Login from './components/Login/login';
import Order from './components/Order/Order';
import OrderForm from './components/OrderForm/OrderForm'; // Import the OrderForm component
import Register from './components/Register/regester';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/about/about';

function App() {
  const [user, setLoginUser] = useState({});
      
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/home" />} // Redirect to home by default
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/OrderForm" element={<OrderForm />} />
          <Route path="/Order" element={<Order />} />
          <Route
            path="/homepage"
            element={
              user && user._id ? (
                <Homepage setLoginUser={setLoginUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;