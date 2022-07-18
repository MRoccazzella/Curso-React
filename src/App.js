import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
     </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
