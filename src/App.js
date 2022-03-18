import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      {/* <ScrollToTop/> */}
      {/* <ComingSoon/> */}
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/portfolio' exact element={<Portfolio/>} />
        <Route path='/contact' exact element={<Contact/>} />
        {/* <Route path='*' element={PageNotFound} /> */}
      </Routes>
      <Footer /> 
    </Router>
  </>
  );
}

export default App;
