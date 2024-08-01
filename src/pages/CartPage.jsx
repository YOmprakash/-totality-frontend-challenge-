
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const CartPage = () => {
  const { cartItems } = useContext(CartContext)
  console.log(cartItems)
  return (
    
      
        <div>
         {
          cartItems.map((item) => (
            <p key={item.id}>{item.price}</p>
          ))
         }
          
  
        </div>
    

      
  )
}

export default CartPage