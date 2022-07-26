import {useEffect, useState} from 'react';
import productos from '../mock/products'
import ItemList from './ItemList'
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items,setItems] = useState([])
  const {category} = useParams()
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    const traerProductos = new Promise ((res,rej) => {
      setLoader(true)
       setTimeout(() => {
        res(category ? productos.filter(obj => obj.category === category) : productos)
       }, 500);
    })
    .then((data) =>{
      setItems(data)
      setLoader(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [category])
  return (
    <>
      {loader ? <Loader/> : 
          <div className="div-saludo">
          <h2 className='texto-bienvenida'>Bienvenido a la tienda de hamurguesas para el hogar</h2>
          <h3 className='texto-bienvenida'>Visita nuestros productos y llevate el mas adecuado!</h3>
          <ItemList items={items}/>
          </div>
      }
      
    </>
    
  )
}
export default ItemListContainer