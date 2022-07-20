import {useEffect, useState} from 'react';
import productos from '../mock/products'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items,setItems] = useState([])
  const {category} = useParams()
  useEffect(() => {
    const traerProductos = new Promise ((res,rej) => {
       setTimeout(() => {
        res(category ? productos.filter(obj => obj.category === category) : productos)
       }, 1000);
    })
    .then((data) =>{
      setItems(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [category])
  return (
    <div className="div-saludo">
        <h2 className='texto-bienvenida'>Bienvenido a la tienda de hamurguesas para el hogar</h2>
        <h3 className='texto-bienvenida'>Visita nuestros productos y llevate el mas adecuado!</h3>
        <ItemList items={items}/>
    </div>
  )
}
export default ItemListContainer