import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ item }) => {
  return (
     
      <div className="card">
          <img src={item.img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text">${item.precio}</p>
          </div>
          <ItemCount />
     </div>
           
        
        
    
    
  )
}

export default Item