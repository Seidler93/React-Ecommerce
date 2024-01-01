import { useUserContext } from "../utils/UserContext";
import ProductCard from "../components/CartPageUI/ProductCardCart";
export default function CartPage() {
  const {cart, setCart} = useUserContext()
  console.log(cart);

  let cartTotal = 0;

  cart.map((product) => {
    // Add the cost of each product to cartTotal
    cartTotal += product.amount * product.price;
    return null; // The map function expects a return value for each iteration
  });

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="d-flex align-items-start justify-content-start">
        <div className="mx-4 d-flex flex-column flex-grow-1">
          {cart.map((item, index) => (
            <ProductCard key={index} product={item}/>
          ))}
        </div>
        <h2 className="text-center w20 total-containter">Total: ${cartTotal}</h2>
      </div>
    </div>
  );
}