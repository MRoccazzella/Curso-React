import {useEffect} from 'react';
import {useState} from 'react';
import productos from '../mock/products'
import ItemList from './ItemList'

export const ItemListContainer = () => {
  const [items,setItems] = useState([])
  useEffect(() => {
    const traerProductos = new Promise ((res,rej) => {
       setTimeout(() => {
        res(productos)
       }, 2000);
    })
    .then((data) =>{
      setItems(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div className="div-saludo">
        <h2 className='texto-bienvenida'>Bienvenido a la tienda de hamurguesas para el hogar</h2>
        <h3 className='texto-bienvenida'>Visita nuestros productos y llevate el mas adecuado!</h3>
        <ItemList items={items}/>
    </div>
  )
}
export default ItemListContainer