import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem'
import blorema from '../assets/blorema.png';
import vetrema from '../assets/vtrm_logo.png';
import patrema from '../assets/ptrm_trans.png';
import allcrypto from '../assets/allcrypto_512.png';
import invidalytics from '../assets/INVIDAAnalyticS.png';
import kushumira from '../assets/kushumira_logo_color.png';
import syberkonsult from '../assets/SyberKonsult(1).png';


function Portfolio() {
  return (

    <>
    {window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })}
    <Helmet>
      <title>Portfolio | Invidum Technologies (Pty) Ltd.</title>
    </Helmet>
    <div className='portfolio-compensation'></div>
    <div className="portfolio-container">
      
        <div className='col' id='portfolioCol'>
        <h1>e-Health</h1>
        <PortfolioItem 
          company='Blorema'
          src={blorema}
          url='https://blorema.co.za' 
          ceo='TBA'
          hq='Johannesburg, South Africa '
          founded='2019'
          vision='Providing secure and easy ways to manage blood donation records and data.'
          description='Blorema is an Electronic Health Records (EHR) management application focusing on blood donation records.' />
  
        <PortfolioItem 
          company='Patrema'
          src={patrema}
          url='https://patrema.com' 
          ceo='TBA'
          hq='Cape Town, South Africa '
          founded='2023'
          vision='Providing secure and easy ways to manage patient health records and data.'
          description='Patrema is an Electronic Health Records (EHR) management application focusing on patient health records.' />

        <PortfolioItem 
          company='Vetrema'
          src={vetrema}
          url='https://vetrema.com' 
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
        <h1>Cryptocurrency</h1>

        <PortfolioItem 
          company='allcrypto24'
          src={allcrypto}
          url='https://allcrypto24.com' 
          ceo='Ayabonga Jumba'
          hq='Johannesburg, South Africa'
          founded='2022'
          vision='Providing the latest cryptocurrency news summerized at your convenience.'
          description='allcrypto24 is a 24 hour news update website that aggregates the most relevant and latest cryptocurrency articles from credible sources.' />

        <h1>Data Analytics</h1>

        <PortfolioItem 
          company='Invidalytics'
          src={invidalytics}
          url='https://invidalytics.com' 
          ceo='TBA'
          hq='New Jersey, USA'
          founded='2024'
          vision='Providing data management services to ensure your data is securely stored and managed efficiently throughout its life cycle.'
          description='Invidalytics is a data analytics firm focusing on providing the latest data services.' />

      <h1>IT Services and Security</h1>

      <PortfolioItem 
          company='SyberKonsult'
          src={syberkonsult}
          url='https://syberkonsult.co.za' 
          ceo='TBA'
          hq='Sandton, South Africa'
          founded='2025'
          vision='Providing cybersecurity expertise, preventing data breaches and actively monitoring and responding to potential cyber-attacks for our clients'
          description='SyberKonsult is cybersecurity an IT firm that focuses on cyber-threats.' />
          
      <PortfolioItem 
          company='Kushumira Inc.'
          src={kushumira}
          url='https://kushumira.co.za' 
          ceo='TBA'
          hq='Pretoria, South Africa'
          founded='2024'
          vision='Providing IT services to private and public sector companies to deliver optimal IT solutions.'
          description='Kushumira is an IT company that focuses on creating value in the private and public sector.' />

        </div>
      </div>
      </>
  )
}

export default Portfolio;