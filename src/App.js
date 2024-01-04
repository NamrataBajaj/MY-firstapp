import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Details from './Details/Details';
import Press from './Press/Press';
import Brand from './Brand/Brand';
import Contact from './contact/contact';
import Footer from './footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Brand' element={<Brand />} />
          <Route path='/Press' element={<Press />} />
          <Route path='/Details' element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
