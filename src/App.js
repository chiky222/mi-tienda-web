import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer titulo='Cuadros de Messi' />}/>
          <Route path='/category/:categoryName' element={ <ItemListContainer />}/>
          <Route path='/detail/:idProd' element={ <ItemDetailContainer />}/>
          <Route path='/cart' element={ <Cart /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App; 
