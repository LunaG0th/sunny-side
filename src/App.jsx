import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';
import Footer from './components/Footer/Footer';
import ButtonTop from './components/ButtonTop/ButtonTop';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      <ButtonTop />
      <Footer />
    </>
  );
}

export default App;
