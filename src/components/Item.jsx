import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
     
      <div className="card">
          <img className='img-card' src={item.img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">${item.precio}</p>
            <Link to={`/item/${item.id}`}><button className='btn btn-secondary'>DETALLE</button></Link>
          </div>
     </div>
           
        
        
    
    
  )
}

export default Item