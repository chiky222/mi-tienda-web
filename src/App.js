import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer titulo='Colección NFT de Messi Hollywood' />}/>
          <Route path='/category/:categoryName' element={ <ItemListContainer titulo='Colección NFT de Messi Hollywood' />}/>
          <Route path='/detail/:idProd' element={ <ItemDetailContainer />}/>
          <Route path='/cart' element={ <Cart /> }/>
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App; 
