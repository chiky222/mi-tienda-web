import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Cuadros de Messi' />
      <Footer />
    </>
  );
}

export default App; 
