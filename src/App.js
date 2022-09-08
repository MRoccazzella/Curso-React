import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Provider from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/Curso-React' element={<ItemListContainer/>} />
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/categorys/:category' element={<ItemListContainer/>} />
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/formulario' element={<Formulario/>}> </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
