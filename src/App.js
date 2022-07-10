import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Botonero from './components/Botonero';
import { useState} from 'react';

function App() {
  const stock = 10
  const [numero, setNumero] = useState(0)
  const incrementar = (e) => {
    if(numero < stock){
      e.preventDefault()
      setNumero(numero + 1)
    }else{
      setNumero("No hay stock")
    }
  }
  const decrementar = (e) => {
    if(numero === 0){
      setNumero(numero)
    }else if(numero === "No hay stock"){
      setNumero(stock)
    }else{
      e.preventDefault()
      setNumero(numero - 1)
    }
}
  
  return (
  <>
    <NavBar/>
    <ItemListContainer saludoNombre = "Jesus"/>
    <div className='d-flex justify-content-center'>
      <button className='botonera' onClick={decrementar}> - </button>
      <Botonero numero = {numero} />
      <button className='botonera' onClick={incrementar}> + </button>
    </div>
    
  </>
    
  );
}

export default App;
