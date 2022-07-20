import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import productos from '../mock/products'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    const itemPorId =  () => {
        return new Promise((res)=>{
            setTimeout(()=>{
                res(productos.find(obj => obj.id === id))
            },1000)
        })
    }
    
    useEffect((id) =>{
        itemPorId().then(res =>{
            setProduct(res)
        }
        )
    },[id])
    
    return (
        <div>
          <ItemDetail data={product} />
        </div>
      );
}

export default ItemDetailContainer;
