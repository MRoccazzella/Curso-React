import {useEffect} from 'react';
import {useState} from 'react';
import productos from '../mock/products'
import ItemList from './ItemList'

export const ItemListContainer = ({saludoNombre}) => {
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
        <h3 className='texto-bienvenida'>Bienvenido {saludoNombre} </h3>
        <ItemList items={items}/>
    </div>
  )
}
export default ItemListContainer