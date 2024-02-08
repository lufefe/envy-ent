import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Vision from '../components/Vision';
import Philanthropy from '../components/Philanthropy';
import Cards from '../components/Cards';
import Services from '../components/Services'

function Home() {
  return (
    <div>
      {window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })}
      <Helmet>
        <title>Home | Invidum Technologies (Pty) Ltd.</title>
      </Helmet>
      <HeroSection/>
      <Vision/>
      <Services/>
      <Philanthropy/>
      <Cards/>
    </div>
  );
}

export default Home;