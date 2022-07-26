import { useState } from "react"


const ItemCount = ({stock,onAdd,swal}) => {
    
  const [numero, setNumero] = useState(1)

  
  const incrementar = (e) => {
    if(numero < stock){
      e.preventDefault()
      setNumero(numero + 1)
    }else{
      setNumero(numero)
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
    <div className="contenedor-botonero">
      <div className=" d-flex justify-content-center">
        <button className='botonera btn btn-dark' onClick={decrementar}> - </button>
        <h4 className="contenedor-numero">{numero}</h4>
        <button className='botonera btn btn-dark' onClick={incrementar}> + </button>
      </div>
      <button onClick={() => onAdd(numero,swal)} className="mt-2 btn btn-ligth">Agregar al carrito</button>
    </div>
    
  )
}

export default ItemCount;
