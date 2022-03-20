import React from 'react';
import { Button } from './Button';
import './Philanthropy.css';
import { FaWifi, FaGraduationCap, FaResearchgate } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Social Responsibility Objectives</h1>
          <div className='pricing__container'>

            <Link to='#' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaWifi />
                </div>
                <h3>Internet Access</h3>
                <h4>200</h4>
                <p>WiFi routers to be donated to:</p>
                <ul className='pricing__container-features'>
                  <li>Schools</li>
                  <li>Communities</li>
                  <li>Small Businesses</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Read More
                </Button>
              </div>
            </Link>

            <Link to='#' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaGraduationCap />
                </div>
                <h3>Skills Development</h3>
                <h4>100</h4>
                <p>students to be taken through courses to develop:</p>
                <ul className='pricing__container-features'>
                  <li>Computer Literacy</li>
                  <li>Programming</li>
                  <li>AI and Robotics</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Read More
                </Button>
              </div>
            </Link>

            <Link to='#' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaResearchgate />
                </div>
                <h3>Research</h3>
                <h4>$10 000</h4>
                <p>to be donated towards research in:</p>
                <ul className='pricing__container-features'>
                  <li>Cloud computing</li>
                  <li>Electronic Health Records</li>
                  <li>Educational Learning</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Read More
                </Button>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;