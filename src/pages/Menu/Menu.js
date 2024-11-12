import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import img from '../../assets/menu/our-menu.jpg';
import Layout from '../../components/Layouts/Layout';
import Categories from './Categories';
import items from './Data';
import Menu from './Menucard';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <Layout>
      <main>
        <section className="menu section">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px", zIndex:"-1" ,color:'white'}}>
        <h2>our menu</h2>
      </div>
      <div className="position-relative">
  <img
    src={img}
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

      {/* Place Order button */}
      <div style={{display: "flex", justifyContent: "flex-end"}}>
          <Link to="/OrderForm">
          <Button 
      variant="primary"
      style={{
        color: 'var(--light-black)',
        background: 'var(--yellow)',
        borderColor: 'var(--yellow)',
        padding: '15px 38px',
        fontSize: '18px',
        fontWeight: '600',
        letterSpacing: '0.5px',
        fontFamily: 'var(--oswald-font)',
        verticalAlign: 'middle',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      Place Order
    </Button>
          </Link>
        </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </Layout>
  );
}

export default App;
