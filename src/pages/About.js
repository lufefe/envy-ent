import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import './About.css';
import about_page from '../assets/about_us2.svg';
import mission from '../assets/mission.svg';
import values from '../assets/values.svg';


 function About() {
  return(

    <>
    <Helmet>
      <title>About | Envy Enterprises (Pty) Ltd.</title>
    </Helmet>
    
    <div className="about-page">
        {window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })}
        {/* About */}
        <div className="home__hero-section darkBg">
          <div className="container">
            <div className="row home_hero-row" style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="col" id="left">
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>
                    <h1 className="heading"> About Us  </h1>
                    <p className="home__hero-subtitle">
                      Envy Enterprises (Pty) Ltd.is a tech holdings company that is comprised of cutting edge subsidiaries solving problems across multiple industries.<br /><br />
                      We focus mainly on e-Health, using the latest technologies to solve problems in healthcare systems. We also provide solutions and/or products in the following realms: CyberSecurity, A.I, Cloud and Data Mining.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col" id="right">
                <div className='home__hero-img-wrapper'>
                  <img src={about_page} alt='dashboard' className='home__hero-img' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}

        <div className="home__hero-section" id="mission">
          <div className="container">
            <div className="row home_hero-row" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <div className="col">
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>
                    <h1 className="heading dark"> Mission  </h1>
                    <p className="home__hero-subtitle dark">
                      Our mission is to build an ecosystem of technologies that serves humanity's needs. Ours is to create a world where we are in control of our data and the use of technology is inherent to our being.
                      <br /><br />
                      We focus on technologies that improve the well-being of our communities and the environment around the globe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='home__hero-img-wrapper'>
                  <img src={mission} alt='dashboard' className='home__hero-img' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}

        <div className="home__hero-section darkBg" id="values">
          <div className="container">
            <div className="row home_hero-row" style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="col">
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>
                    <h1 className="heading"> Values </h1>
                    <p className="home__hero-subtitle">
                      We pride ourselves in four values:
                      <ul className="values-list">
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Ethics</li>
                        <li>Trust</li>
                      </ul>
                      <br />
                      We build trust to our clients and uphold integrity by following ethical data management standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='home__hero-img-wrapper'>
                  <img src={values} alt='dashboard' className='home__hero-img' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div></>
  )
};

export default About;