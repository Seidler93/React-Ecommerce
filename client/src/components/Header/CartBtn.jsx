import { Link } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";
import { useState, useEffect } from 'react';

export default function CartBtn({}) {
  const {cart, setCart} = useUserContext()
  let cartTotal = 0;

  cart.map((product) => {
    // Add the cost of each product to cartTotal
    cartTotal += product.amount;
    return null; // The map function expects a return value for each iteration
  });

  return (
    <>
      <Link 
        className='btn btn-light cart-btn me-2'
        variant="outline-secondary" 
        id="button-addon2"
        to={'/cart'}
      >
        &#x1F6D2;
        <span>
          {cartTotal > 0 && <p className="cart-total text-white">{cartTotal}</p>}
        </span>
      </Link>
    </>
  )  
}