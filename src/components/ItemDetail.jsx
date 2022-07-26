import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({ data }) => {
    const [cantidad,setCantidad] = useState(0)
    const onAdd = (cant) => {
        setCantidad(cant)
    }

    return (
        <div className="routing-container">
            <div className="item-detail-container">
                <div className='itemDetail'>
                    <img src={data.img} alt={data.nombre} className='itemDetailImage' />
                    <div className="detail-info-container">
                        
                        <h4 className="detail-title">{data.nombre}</h4>
                        <p className="detail-description">{data.descripcion}</p>
                        <p className="detail-precio">${data.precio}</p>
                        <div className="div-container-botonero">
                            {cantidad === 0 ? <ItemCount stock={data.stock} onAdd={onAdd}/> : 
                            <Link to = "/carrito">Finalizar compra</Link>}
                            
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
      
    );
  };
  
  export default ItemDetail;