import React from 'react'
import './Portfolio.css';

function PortfolioItem(props) {
  return (
    <div className="portfolio-wrapper">
          <div className="portfolio-content">
            <div className="portfolio-inner">
              <div className="sub-logo">
                <a href={props.url} target='_blank' rel="noopener noreferrer">
                  <img src={props.src} alt="subsidiary logo" className="sub-logo-image" />
                </a>
              </div>
              <div className="sub-description">
                <p className="sub-text">
                  <span id='portfolio-name'>NAME </span> | {props.company} <br /><br />
                  <span id='portfolio-ceo'>CEO </span> | {props.ceo} <br /><br />
                  <span id='portfolio-hq'> HEADQUARTERS </span> | {props.hq}<br /><br />
                  <span id='portfolio-foundyear'>FOUNDED </span> | {props.founded} <br /><br />

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