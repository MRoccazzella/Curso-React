import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const Provider = (props) => {
    const [cart,setCart] = useState([])
    
    const isInCart = (id) => {
        return (cart.some(producto => producto.id === id ))
    } 
    const sumarCantidad = (contador, item) => {
        const cantidad = [...cart];
        cantidad.forEach((c) => {
          c.id === item.id && (c.cantidad += contador);
        }); 
    
        setCart(cantidad);
    };
    const eliminarEach = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(productosFiltrados)
    }
    const eliminarAll = () =>{
        return setCart([])
    }
    const total = () => {
        const sumaTotal = cart.reduce((x, y) => x + y.precio * y.cantidad, 0);
        return sumaTotal;
    };
    const unidades = () => {
        const units = cart.reduce((x,y) => x + y.cantidad,0)
        return units
    }
    const addToCart = (item,cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(cantidad,item)                        
        }else {
            setCart([...cart,{...item, cantidad}])
            
        }
        
    }

    return(
        <CartContext.Provider value={{cart, addToCart, eliminarAll, eliminarEach, total, unidades}}>{props.children}</CartContext.Provider>
    )
    
} 


export default Provider

