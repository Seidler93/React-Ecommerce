import { useUserContext } from "../../utils/UserContext";

export default function CartBtn({cartTotal}) {
  const {cart, setCart} = useUserContext()
  cartTotal = 5;

  return (
    <>
      <button 
        className='btn btn-light cart-btn'
        variant="outline-secondary" 
        id="button-addon2"
      >
        &#x1F6D2;
        <span>
          {cart > 0 && <p className="cart-total text-white">{cart}</p>}
        </span>
      </button>
    </>
  )  
}