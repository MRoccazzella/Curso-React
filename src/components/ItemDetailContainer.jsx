import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail'
import Loader from "./Loader/Loader";
import productos from '../mock/products'
import { getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const [loader,setLoader] = useState(true)
    
    
    useEffect(() =>{
        setLoader(true)
        const querydb = getFirestore()
        const queryDoc = doc(querydb,'products',id)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
        .then(res => setLoader(false))
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
