import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const CartWidget = () => {
  const {unidades} = useContext(CartContext)
  const valor = unidades()
  return (
    <div className="cartWidgetContainer">
      <img src='/images/carrito-de-compras.png' href="/" alt="" />
      <div className="cartUnidades">{valor}</div>
    </div>

  )
}

export default CartWidget