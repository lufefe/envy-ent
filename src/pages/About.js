import React from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import './About.css';
import envyLogo from '../assets/envylogonameblack.png'
import mission from '../assets/mission.svg';
import values from '../assets/values.svg';


 function About() {
   
  return(
    
    <>
     {window.scrollTo({ top: 0, left: 100, behavior: 'smooth' })}
    <Helmet>
      <title>About | Envy Enterprises (Pty) Ltd.</title>
    </Helmet>
    
    <div className="about-page">
        <div className='about-compensation'></div>
        {/* About */}
        <div className="home__hero-section darkBg" id = "about">
            <div className="row home_hero-row">
              <div className="col">
                <div className='home__hero-text-wrapper' id='aboutText'>
                  <div className='top-line'>
                    <h1 className="heading"> About Us  </h1>
                    <p className="home__hero-subtitle">
                      Envy Enterprises (Pty) Ltd. is a tech holdings company that is comprised of cutting edge subsidiaries solving problems across multiple industries.<br /><br />
                      We focus mainly on e-Health, using the latest technologies to solve problems in healthcare systems. We also provide solutions and/or products in the following realms: CyberSecurity, A.I, Cloud and Data Mining.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='home__hero-img-wrapper'>
                  <img src={envyLogo} alt='dashboard' className='home__hero-img' id='about_logo'/>
                </div>
              </div>
            </div>
        </div>

        {/* Mission */}
        <div className="home__hero-section" id="mission">
            <div className="row home_hero-row">
            <div className="col">
                <div className='home__hero-img-wrapper'>
                  <img src={mission} alt='dashboard' className='home__hero-img' id='mission-image'/>
                </div>
              </div>
              <div className="col">
                <div className='home__hero-text-wrapper' id='missionText'>
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
          </div>
        </div>

        {/* Values */}

        <div className="home__hero-section darkBg" id="values">
            <div className="row home_hero-row">
              <div className="col">
                <div className='home__hero-text-wrapper' id='valuesText'>
                  <div className='top-line'>
                    <h1 className="heading"> Values </h1>
                    <p className="home__hero-subtitle">
                      We pride ourselves in four values:
                      <ul className="values-list">
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Ethics</li>
                      </ul>
                      <br />
                      We uphold integrity by implementing ethical data management standards and policies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='home__hero-img-wrapper'>
                  <img src={values} alt='dashboard' className='home__hero-img' id='values-image'/>
                </div>
              </div>
            </div>
        </div>

      </div></>
  )
};

export default About;