import Deal from './DealCard'
import React, { useRef } from 'react';

const products = [
  { id: 1, name: 'T-shirt', description: 'This is a T-shirt.', price: 65 },
  { id: 2, name: 'Jeans', description: 'This is a pair of jeans.', price: 80 },
  { id: 3, name: 'Sneakers', description: 'This is a pair of sneakers.', price: 120 },
  { id: 4, name: 'Hat', description: 'This is a hat.', price: 25 },
  { id: 5, name: 'Backpack', description: 'This is a backpack.', price: 50 },
  { id: 6, name: 'Sunglasses', description: 'This is a pair of sunglasses.', price: 30 },
  { id: 7, name: 'Watch', description: 'This is a watch.', price: 100 },
  { id: 8, name: 'Gloves', description: 'These are gloves.', price: 15 },
  { id: 9, name: 'Scarf', description: 'This is a scarf.', price: 20 },
  { id: 10, name: 'Jacket', description: 'This is a jacket.', price: 150 },
  { id: 11, name: 'Boots', description: 'These are boots.', price: 90 },
  { id: 12, name: 'Skirt', description: 'This is a skirt.', price: 40 },
  { id: 13, name: 'Sweater', description: 'This is a sweater.', price: 70 },
  { id: 14, name: 'Umbrella', description: 'This is an umbrella.', price: 18 },
  { id: 15, name: 'Dress', description: 'This is a dress.', price: 85 },
];

export default function DealsContainer() {
  const containerRef = useRef(null);
  
  const handleScroll = (direction) => {
    // Check if container exists
    if (containerRef.current) {
      if (direction === 'right') {
        // Scroll to the right by 650 pixels
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft + 650,
          behavior: 'smooth', // Add smooth scrolling animation
        });
      } else {
      // Scroll to the left by 650 pixels
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft - 650,
          behavior: 'smooth', // Add smooth scrolling animation
        });
      }
    }
  };

  return (
    <>
      <section className="deals-container">
        <h2>Deals</h2>
          <button onClick={() => handleScroll('left')} className='scroll-left'>&#129144;</button>
        <div ref={containerRef} className='deals'>
          <Deal deals={products}/>
        </div>
          <button onClick={() => handleScroll('right')} className='scroll-right'>&#129146;</button>
      </section>
    </>
  )
}