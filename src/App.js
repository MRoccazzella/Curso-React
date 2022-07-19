import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/categorys/:category' element={<ItemListContainer/>} />
     </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
