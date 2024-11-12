import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({ items }) => {
  return (
    <div className='section-center'>
    {items.map((menuItem) => {
      const { id, title, img, desc, price } = menuItem;
      return (
        <Link key={id} to={`/product/${id}`} className='menu-item'>
          <img src={img} alt={title} className='photo' />
          <div className='item-info' style={{ color: 'white' }}> {/* Apply white color */}
            <header>
              <h4>{title}</h4>
              <h4 className='price' style={{ color: 'white' }}>${price}</h4> {/* Apply white color */}
            </header>
            <p className='item-text' style={{ color: 'white' }}>{desc}</p> {/* Apply white color */}
            {/* Add an "Add to Cart" button */}
          </div>
        </Link>
      );
    })}
  </div>
  
  );
};

export default MenuCard;
