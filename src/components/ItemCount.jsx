import { useState } from "react"
import productos from '../mock/products'


const ItemCount = ({stock}) => {
    
const [numero, setNumero] = useState(1)

  
const incrementar = (e) => {
    if(numero < stock){
      e.preventDefault()
      setNumero(numero + 1)
    }else{
      setNumero("No hay stock")
    }
  }
const decrementar = (e) => {
    if(numero === 1){
      setNumero(numero)
    }else if(numero === "No hay stock"){
      setNumero(stock)
    }else{
      e.preventDefault()
      setNumero(numero - 1)
    }
}
  return (
    <div className="contenedor-botonero d-flex justify-content-center">
        <button className='botonera' onClick={decrementar}> - </button>
        <h4 className="contenedor-numero">{numero}</h4>
        <button className='botonera' onClick={incrementar}> + </button>
    </div>
  )
}

export default ItemCount;
