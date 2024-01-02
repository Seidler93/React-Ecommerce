import { useState, useEffect } from 'react';
import { useUserContext } from "../../utils/UserContext";

export default function ProductCard({ product }) {
  const { cart, setCart } = useUserContext();
  const [amount, setAmount] = useState(product.amount);
  console.log(amount);

  const updateProduct = (updatedAmount) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        // Update the quantity of the matching product
        return { ...item, amount: updatedAmount };
      }
      return item;
    });
    setCart(updatedCart);
  };  

  const handleDelete = () => {
    // Filter out the product with the specified id
    const updatedCart = cart.filter((item) => item.id !== product.id);
    // Update the cart state with the filtered array
    setCart(updatedCart);
  };

  const handleIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
    // Use the updated amount in the callback
    updateProduct(amount + 1);
  };
  
  const handleDecrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
      // Use the updated amount in the callback
      updateProduct(amount - 1);
    }
  };
  
  const handleAmountChange = (event) => {
    const newAmount = parseInt(event.target.value, 10) || 1;
    setAmount(newAmount);
    // Use the updated amount in the callback
    updateProduct(newAmount);
  };  

  const total = product.price * amount;

  return (
    <>
      <div key={product.id} className='product-card d-flex justify-content-between'>
        <div>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
        <div className='d-flex flex-column justify-content-end'>
          <h5>Total: ${total}</h5>
          <div className="amount-control">
            <div className='amount'>
              <button onClick={handleDecrease} className='decrease-btn'>-</button>
              <input
                className='amount-input'
                type="text"
                value={amount}
                onChange={handleAmountChange}
              />
              <button onClick={handleIncrease} className='increase-btn'>+</button>
            </div>
            <button onClick={handleDelete} className='count-btn ms-2'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
