import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const CartDetail = () => {
    const {cart, eliminarAll, eliminarEach, total, unidades} = useContext(CartContext)

  return (

    <div className="cartContainer">
        <h2 className="mt-2 mb-4 tituloCarrito">TU CARRITO</h2>
        {
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
            <h3 className="cartTotalPrice">Total: ${total()}</h3>
            <h3 className="cartTotalPrice">Productos agregados: {unidades()}</h3>
            <div className="d-flex">
                <button className="cartButtonEliminarTodos btn btn-danger m-1" onClick={eliminarAll}>Eliminar productos del carrito</button>
                <Link to='/formulario'>
                    <button className="cartButtonEliminarTodos btn btn-success m-1">Finalizar Compra</button>
                </Link>
            </div>
            
        </div>
        
    </div>
  )
}

export default CartDetail