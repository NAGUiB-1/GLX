


import Navbar from'./components/navbar'
import Footer from'./components/footer'
import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Notfound from './routes/Notfound'
import Pricing from './routes/Pricing'
import Training from './routes/Training'
import Contact from './routes/Contact'
function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




