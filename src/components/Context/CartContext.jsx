import { useEffect, useState } from "react";
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
    useEffect(() => {
        console.log(cart)
    },[cart])
    const addToCart = (item,cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(cantidad,item)                        
        }else {
            setCart([...cart,{...item, cantidad}])
        }
        
    }

    return(
        <CartContext.Provider value={{cart, addToCart}}>{props.children}</CartContext.Provider>
    )
    
} 


export default Provider

