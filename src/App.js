import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './pages/404';
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
        <Route path='/about' element={<About/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer /> 
    </Router>
  </>
  );
}

export default App;
