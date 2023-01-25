import React from 'react'
import './Portfolio.css';

function PortfolioItem(props) {
  return (
    <div className="portfolio-wrapper">
          <div className="portfolio-content">
            <div className="portfolio-inner">
              <div className="sub-logo">
                <a href={props.url} target='_blank' rel="noopener noreferrer">
                  <img src={props.src} alt="subsidiary" className="sub-logo-image" />
                </a>
              </div>
              <div className="sub-description">
                <p className="sub-text">
                  <span>CEO</span> | {props.ceo} <br /><br />
                  <span> HEADQUARTERS </span>| {props.hq}<br /><br />
                  <span>FOUNDED </span>| {props.founded} <br /><br />

                  <span>VISION</span>  | {props.vision}<br /><br />

                  {props.description}<br /><br />

                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
  )
}

export default PortfolioItem