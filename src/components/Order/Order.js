import axios from 'axios';
import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:9002/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
    <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>Orders</h2>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
  {orders.map(order => (
    <li key={order._id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ width: '25%', textAlign: 'left' }}>First Name:</td>
            <td style={{ width: '25%', textAlign: 'left' }}>{order.firstName}</td>
            <td style={{ width: '25%', textAlign: 'left' }}>Last Name:</td>
            <td style={{ width: '25%', textAlign: 'left' }}>{order.lastName}</td>
          </tr>
          <tr>
            <td style={{ width: '25%', textAlign: 'left' }}>Order Name:</td>
            <td style={{ width: '25%', textAlign: 'left' }}>{order.orderName}</td>
            <td style={{ width: '25%', textAlign: 'left' }}>Phone Number:</td>
            <td style={{ width: '25%', textAlign: 'left' }}>{order.phoneNumber}</td>
          </tr>
          <tr>
            <td style={{ width: '25%', textAlign: 'left' }}>Pickup Time:</td>
            <td style={{ width: '25%', textAlign: 'left' }}>{order.pickupTime}</td>
            <td style={{ width: '25%', textAlign: 'left' }}>Extra Add On:</td>
            <td style={{ width: '25%', textAlign: 'left' }}>{order.extraAddOn}</td>
          </tr>
        </tbody>
      </table>
    </li>
  ))}
</ul>

    </div>
  );
};

export default YourComponent;
