import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout';
import Track from './components/Track';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer titulo='Colección NFT de Messi Hollywood' />}/>
            <Route path='/category/:categoryName' element={ <ItemListContainer titulo='Colección NFT de Messi Hollywood' />}/>
            <Route path='/detail/:idProd' element={ <ItemDetailContainer />}/>
            <Route path='/cart' element={ <Cart /> }/>
            <Route path='/contact' element={ <Contact /> }/>
            <Route path='/checkout' element={ <Checkout /> }/>
            <Route path='/track' element={ <Track /> }/>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App; 
