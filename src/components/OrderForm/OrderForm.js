import axios from 'axios';
import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import salad from '../../assets/menu/salad.jpg';
import Layout from '../../components/Layouts/Layout';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    orderName: '',
    pickupTime: '',
    extraAddOn: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validation for first name, last name, and extra add-on fields
    if (name === "firstName" || name === "lastName" || name === "extraAddOn") {
      if (/^[a-zA-Z\s]*$/.test(value) || value === "") {
        setFormData({ ...formData, [name]: value });
      }
    }
    // Validation for phone number field
    else if (name === "phoneNumber") {
      if (/^\d{0,10}$/.test(value) || value === "") {
        setFormData({ ...formData, [name]: value });
      }
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9002/OrderForm', formData);
      console.log(response.data);
      // Show success message
      setShowSuccessMessage(true);
      // Clear form data after a delay
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          orderName: '',
          pickupTime: '',
          extraAddOn: ''
        });
        setShowSuccessMessage(false);
      }, 3000); // Hide success message after 3 seconds
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <Col lg={7} className="mb-5 mb-lg-0">
        <div className="position-relative">
          <img
            src={salad}
            className="img-fluid"
            alt="Hero"
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              zIndex: '-1' // Adjust z-index to send the image to the back
            }}
          />
        </div>
      </Col>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh',paddingTop:'5em' }}>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', padding: '1rem',background:'white', border: '1px solid #ccc', borderRadius: '25px', width: '600px', margin: 'auto' }}>
          {/* Success message */}
          {showSuccessMessage && (
            <div style={{ backgroundColor: '#eee', color: 'black', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              Order placed successfully!
            </div>
          )}

          {/* Form fields */}
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold', color: 'Black' }}>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={{ width: '100%', fontWeight: 'bold', color: 'black', borderRadius: '8px', backgroundColor: 'white', padding: '0.5rem' }} />
            </div>

          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold', color: 'Black' }}>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={{ width: '100%', fontWeight: 'bold', color: 'black', borderRadius: '8px', backgroundColor: 'white', padding: '0.5rem' }} />
          </div>

          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold', color: 'black' }}>Phone no.:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required style={{ width: '100%', fontWeight: 'bold', color: 'black', borderRadius: '8px', backgroundColor: 'white', padding: '0.5rem' }} />
          </div>

          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold', color: 'black' }}>Order Name:</label>
            <select name="orderName" value={formData.orderName} onChange={handleChange} required style={{ width: '100%', fontWeight: 'bold', color: 'black', borderRadius: '8px', backgroundColor: 'white', padding: '0.5rem' }}>
              <option value="">Select an option</option>
              <option value="Buttermilk Pancakes">Buttermilk Pancakes</option>
              <option value="Biryani">Biryani</option>
              <option value="Godzilla Milkshake">Godzilla Milkshake</option>
              <option value="country delight">Country Delight</option>
              <option value="Roti">Roti</option>
              <option value="Oreo Dream">Oreo Dream</option>
            </select>
          </div>

          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold', color: 'black' }}>Pickup Time:</label>
            <div style={{ display: 'flex' }}>
              <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required style={{ width: '50%', fontWeight: 'bold', color: 'black', borderRadius: '8px', backgroundColor: 'white', padding: '0.5rem' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold', color: 'black' }}>Extra Add On:</label>
            <textarea name="extraAddOn" value={formData.extraAddOn} onChange={handleChange} style={{ width: '100%', fontWeight: 'bold', color: 'black', borderRadius: '8px', backgroundColor: 'white', padding: '0.5rem' }}></textarea>
          </div>

          <button type="submit" style={{ margin: '1rem', fontWeight: 'bold', borderRadius: '8px', color: 'white', backgroundColor: 'red', padding: '0.5rem 1rem', border: 'none' }}>Submit</button>


        </form>
      </div>
    </Layout>
  );
};

export default OrderForm;
