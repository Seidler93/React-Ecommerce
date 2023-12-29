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
    setCart(cart + 1)
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
        <button onClick={handleQuickView} className='product-btn'>Quick View</button>
        <button onClick={handleAddToCart} className='product-btn ms-2'>Add To Cart</button>
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
