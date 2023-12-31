import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUserContext } from "../../utils/UserContext";

export default function ProductCard({ product, filter, filterOptions }) {
  const [isQuickViewClicked, setIsQuickViewClicked] = useState(false);
  const {cart, setCart} = useUserContext()

  const handleQuickView = () => {
    setIsQuickViewClicked(!isQuickViewClicked);
  };

  const handleAddToCart = () => {
    const foundProductIndex = cart.findIndex((cartProduct) => cartProduct.id === product.id);
  
    if (foundProductIndex !== -1) {
      // Product is already in the cart
      const updatedCart = [...cart];
      updatedCart[foundProductIndex].amount += 1;
      setCart(updatedCart);
    } else {
      // Product is not in the cart
      const newProduct = { ...product, amount: 1 };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
    }
  };
  

  return (
    <>
      <div
        key={product.id}
        className={`
          product-card
          ${filter === filterOptions[0] ? 'single' : ''}
          ${filter === filterOptions[1] ? 'double' : ''}
          ${filter === filterOptions[2] ? 'triple' : ''}
        `}
      >
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <div className='d-flex flex-wrap'>
          <button onClick={handleQuickView} className='product-btn'>Quick View</button>
          <button onClick={handleAddToCart} className='product-btn'>Add To Cart</button>
        </div>
      </div>
      {isQuickViewClicked && 
        <motion.div
          key={product.id}
          className={`
            product-card centered
            ${filter === filterOptions[0] ? 'single' : ''}
            ${filter === filterOptions[1] ? 'double' : ''}
            ${filter === filterOptions[2] ? 'triple' : ''}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button onClick={handleQuickView}>Quick View</button>
        </motion.div>
      }
    </>
  );
}
