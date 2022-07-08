import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Botonero from './components/Botonero';
import { useState} from 'react';

function App() {
  const [numero, setNumero] = useState(0)
  const incrementar = (e) => {
    e.preventDefault()
    setNumero(numero + 1)
  }
  const decrementar = (e) => {
    e.preventDefault()
    setNumero(numero - 1)
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
