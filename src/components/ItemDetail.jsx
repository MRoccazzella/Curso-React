import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const ItemDetail = ({ data }) => {
    const [cantidad,setCantidad] = useState(0)
    const MySwal = withReactContent(Swal)
    const onAdd = (cant, swal) => {
        setCantidad(cant)
        return swal.fire({
            icon: 'success',
            text: `Usted agrego ${cant} productos al carrito`
        })
            
        

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
                            {cantidad === 0 ? <ItemCount stock={data.stock} onAdd={onAdd} swal={MySwal}/> : 
                            <Link to = "/carrito">Finalizar compra</Link>}
                            
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
      
    );
  };
  
  export default ItemDetail;