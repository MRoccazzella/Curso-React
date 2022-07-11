import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/Botonero';

function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer saludoNombre = "Jesus"/>
    <div className='d-flex justify-content-center'>
      <ItemCount />
    </div>
  </>
    
  );
}

export default App;
