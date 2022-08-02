import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const CartDetail = () => {
    const {cart, eliminarAll, eliminarEach, total, unidades} = useContext(CartContext)
  return (
    <div className="cartContainer">{
        cart.map((prod) => (
            <div key={prod.id} className="cartItemContainer">
                <img className="cartImage" src={prod.img} alt={prod.nombre}></img>
                <div>
                    <h3 className="cartName">{prod.nombre}</h3>
                    <h4>${prod.precio}</h4>
                    <h4>Cantidad: {prod.cantidad}</h4>
                </div>
                <button className="cartButton btn btn-danger" onClick={() => eliminarEach(prod.id)}>Eliminar</button>
            </div>
        ))
        }
        <div className="cartFinalContainer">
            <h3 className="cartTotalPrice" >Total: ${total()}</h3>
            <h3 className="cartTotalPrice">Productos agregados: {unidades()}</h3>
            <button className="cartButtonEliminarTodos btn btn-danger" onClick={eliminarAll}>Eliminar Productos del carrito</button>
        </div>
        
    </div>
  )
}

export default CartDetail