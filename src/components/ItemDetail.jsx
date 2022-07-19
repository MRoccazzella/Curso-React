
const ItemDetail = ({ data }) => {
    return (
        <div className="routing-container">
            <div className="item-detail-container">
                <div className='itemDetail'>
                    <img src={data.img} alt={data.nombre} className='itemDetailImage' />
                    <div className="detail-title-container">
                        <h4 className="detail-title">{data.nombre}</h4>
                        <p className="detail-description">{data.descripcion}</p>
                        <p className="detail-precio">${data.precio}</p>
                    </div>
                </div>
            </div> 
        </div> 
      
    );
  };
  
  export default ItemDetail;