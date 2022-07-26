import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import Loader from "./Loader/Loader";
import productos from '../mock/products'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const [loader,setLoader] = useState(true)
    const itemPorId =  () => {
        return new Promise((res)=>{
            setLoader(true)
            setTimeout(()=>{
                res(productos.find(obj => obj.id === id))
            },500)
        })
    }
    
    useEffect(() =>{
        itemPorId().then(res =>{
            setLoader(false)
            setProduct(res)
        }
        )
    },[id])
    
    return (
        <>
        {
        loader ? <Loader /> :
        <div>
            <ItemDetail data={product} />
        </div>
        }    
        </>
        
      );
}

export default ItemDetailContainer;
