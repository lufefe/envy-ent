import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem'
import blorema from '../assets/blorema.png';
import vetrema from '../assets/vtrm_logo.png';
import patrema from '../assets/ptrm_trans.png';
import allcrypto from '../assets/allcrypto24.png';

function Portfolio() {
  return (

    <><Helmet>
      <title>Portfolio | Envy Enterprises (Pty) Ltd.</title>
    </Helmet>
    <div className='portfolio-compensation'></div>
    <div className="portfolio-container">
      {window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })}
      
        <div className='col' id='portfolioCol'>
        <h1>e-Health</h1>
        <PortfolioItem 
          src={blorema}
          url='https://blorema.co.za' 
          ceo='TBA'
          hq='Johannesburg, South Africa '
          founded='2019'
          vision='Providing secure and easy ways to manage blood donation records and data.'
          description='Blorema is an Electronic Health Records (EHR) management application focusing on blood donation records.' />
  
        <PortfolioItem 
          src={patrema}
          ceo='TBA'
          hq='Cape Town, South Africa '
          founded='2023'
          vision='Providing secure and easy ways to manage patient health records and data.'
          description='Patrema is an Electronic Health Records (EHR) management application focusing on patient health records.' />

        <PortfolioItem 
          src={vetrema}
          ceo='TBA'
          hq='London, UK'
          founded='2024'
          vision='Providing secure and easy ways to manage vet records and data.'
          description='Vetrema is an Electronic Health Records (EHR) management application focusing on Veterinarian records.' />
        </div>
        <div className='col' id='logoCol'>

        {/* <div className='home__hero-img-wrapper'>
          <img src={envyLogo} alt='dashboard' className='home__hero-img' style = {{'margin-top': "-70px"}} />
        </div> */}
        <h1>cryptocurrency</h1>

        <PortfolioItem 
          src={allcrypto}
          url='https://allcrypto24.com' 
          ceo='Ayabonga Jumba'
          hq='Johannesburg, South Africa'
          founded='2022'
          vision='Providing the latest cryptocurrency news summerized at your convenience.'
          description='allcrypto24 is a 24 hour news update website that aggregates the most relevant and latest cryptocurrency articles from credible sources.' />

        </div>
      </div>
      </>
  )
}

export default Portfolio;