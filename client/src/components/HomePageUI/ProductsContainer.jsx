import Product from './productCard'
import DisplayFilter from './displayFilter';
import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'T-shirt', description: 'This is a T-shirt.', price: 25 },
  { id: 2, name: 'Jeans', description: 'This is a pair of jeans.', price: 50 },
  { id: 3, name: 'Sneakers', description: 'This is a pair of sneakers.', price: 80 },
  { id: 4, name: 'Hat', description: 'This is a hat.', price: 15 },
  { id: 5, name: 'Backpack', description: 'This is a backpack.', price: 40 },
  { id: 6, name: 'Sunglasses', description: 'This is a pair of sunglasses.', price: 30 },
  { id: 7, name: 'Watch', description: 'This is a watch.', price: 100 },
  { id: 8, name: 'Gloves', description: 'These are gloves.', price: 10 },
  { id: 9, name: 'Scarf', description: 'This is a scarf.', price: 20 },
  { id: 10, name: 'Jacket', description: 'This is a jacket.', price: 150 },
  { id: 11, name: 'Boots', description: 'These are boots.', price: 90 },
  { id: 12, name: 'Skirt', description: 'This is a skirt.', price: 35 },
  { id: 13, name: 'Sweater', description: 'This is a sweater.', price: 70 },
  { id: 14, name: 'Umbrella', description: 'This is an umbrella.', price: 18 },
  { id: 15, name: 'Dress', description: 'This is a dress.', price: 85 },
  { id: 16, name: 'Socks', description: 'These are socks.', price: 5 },
  { id: 17, name: 'Running Shoes', description: 'This is a pair of running shoes.', price: 60 },
  { id: 18, name: 'Smartphone', description: 'This is a smartphone.', price: 500 },
  { id: 19, name: 'Laptop', description: 'This is a laptop.', price: 800 },
  { id: 20, name: 'Desk Chair', description: 'This is a desk chair.', price: 120 },
  { id: 21, name: 'Desk Lamp', description: 'This is a desk lamp.', price: 25 },
  { id: 22, name: 'Coffee Maker', description: 'This is a coffee maker.', price: 60 },
  { id: 23, name: 'Headphones', description: 'These are headphones.', price: 50 },
  { id: 24, name: 'Back Massager', description: 'This is a back massager.', price: 40 },
  { id: 25, name: 'Hiking Boots', description: 'These are hiking boots.', price: 70 },
  { id: 26, name: 'Smartwatch', description: 'This is a smartwatch.', price: 120 },
  { id: 27, name: 'Bicycle', description: 'This is a bicycle.', price: 300 },
  { id: 28, name: 'Sunscreen', description: 'This is sunscreen.', price: 10 },
  { id: 29, name: 'Tent', description: 'This is a tent.', price: 80 },
  { id: 30, name: 'Fishing Rod', description: 'This is a fishing rod.', price: 25 },
  { id: 31, name: 'Guitar', description: 'This is a guitar.', price: 150 },
  { id: 32, name: 'Cookware Set', description: 'This is a cookware set.', price: 100 },
  { id: 33, name: 'Bluetooth Speaker', description: 'This is a Bluetooth speaker.', price: 40 },
  { id: 34, name: 'Digital Camera', description: 'This is a digital camera.', price: 200 },
  { id: 35, name: 'Running Shorts', description: 'These are running shorts.', price: 20 },
  { id: 36, name: 'Tennis Racket', description: 'This is a tennis racket.', price: 30 },
  { id: 37, name: 'Plant Pot', description: 'This is a plant pot.', price: 15 },
  { id: 38, name: 'Yoga Mat', description: 'This is a yoga mat.', price: 20 },
  { id: 39, name: 'Water Bottle', description: 'This is a water bottle.', price: 8 },
  { id: 40, name: 'Dumbbell Set', description: 'This is a dumbbell set.', price: 50 },
  { id: 41, name: 'Hiking Backpack', description: 'This is a hiking backpack.', price: 60 },
  { id: 42, name: 'Sleeping Bag', description: 'This is a sleeping bag.', price: 30 },
];

export default function ProductsContainer() {
  const filterOptions = ['single', 'double', 'triple']
  const [filter, setFilter] = useState('double');

  return (
    <>
      <section >
        <DisplayFilter filter={filter} filterOptions={filterOptions} setFilter={setFilter}/>
        <div className='product-container'>          
          <Product products={products} filter={filter} filterOptions={filterOptions}/>
        </div>
      </section>
    </>
  )
}