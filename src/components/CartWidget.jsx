import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import cartImage from '../images/carrito-de-compras.png'
const CartWidget = () => {
  const {unidades} = useContext(CartContext)
  const valor = unidades()
  return (
    <div className="cartWidgetContainer">
      <img src={cartImage} href="/" alt="" />
      <div className="cartUnidades">{valor}</div>
    </div>

  )
}

export default CartWidget