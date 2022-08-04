import {useEffect, useState} from 'react';
import productos from '../mock/products'
import ItemList from './ItemList'
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [items,setItems] = useState([])
  const {category} = useParams()
  const [loader, setLoader] = useState(true)
  
  useEffect(() => {
    setLoader(true)
    const querydb = getFirestore()
    const queryCollection = collection(querydb,'products')
    if (category) {
      const queryFilter = query(queryCollection, where('category', '==', category))
      getDocs(queryFilter)
      .then(res => setItems(res.docs.map(product => ({id: product.id,...product.data()}))))
      .then(res => setLoader(false))
    } else {
      
      getDocs(queryCollection)
      .then(res => setItems(res.docs.map(product => ({id: product.id,...product.data()}))))
      .then(res => setLoader(false))
    }
  },[category])
  
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