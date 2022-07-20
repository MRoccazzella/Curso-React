import ItemCount from "./ItemCount";


const ItemDetail = ({ data }) => {
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
                            <ItemCount stock={data.stock}/>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
      
    );
  };
  
  export default ItemDetail;