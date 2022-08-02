import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Provider from './components/Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
    <Provider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/categorys/:category' element={<ItemListContainer/>} />
            <Route path='/carrito' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    
    </>

  );
}

export default App;
