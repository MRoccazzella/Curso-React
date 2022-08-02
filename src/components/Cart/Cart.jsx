import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartDetail from "./CartDetail"
const Cart = () => {
    const {cart} = useContext(CartContext)
    if(cart.length === 0){
        return (
            <div className="noCartContainer">
                <h2>No hay productos en el carrito</h2>
                <h3>Dirigase al <Link to='/'>Home</Link></h3>
            </div>
            )
    }
  return (
    <CartDetail />
  )
}

export default Cart