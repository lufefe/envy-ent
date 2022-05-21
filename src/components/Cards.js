import React from 'react';
import './Cards.css';
import '../App.css';
import CardItem from './CardItem';
import director from '../assets/director_square3.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1 className="cards_heading">Board of Directors</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={director}
              text='Ayabonga Jumba'
              label='Director'
              path='https://www.linkedin.com/in/ayabonga-jumba/'
            />
            <CardItem
              src='https://images.generated.photos/YLEhKp8QcyZeVpv_UETPCiE34LXxkuEX7NBVP6IoIec/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODE1NDQxLmpwZw.jpg'
              text='Cynthia Beck'
              label='CIO'
      
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.generated.photos/elnBP8vDuvtqPs4Zs5KKMsoKW_pp_OatG0Xoaa0m88I/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTY3MTU4LmpwZw.jpg'
              text='Nosipho Swazi'
              label='CTO'
          
            />
           
            <CardItem
              src='https://images.generated.photos/xUzsaeixbYIOcConYZmObLVivfAZmUtW4lznNkkzq9g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTY1OTg2LmpwZw.jpg'
              text='Gloria Finn'
              label='Non-Executive Director'
            />
          </ul>
          <ul className='cards__items'>
          </ul>
        </div>
      </div>
      <p className="disclaimer">Disclaimer: The above pictures are A.I generated images and are used as placeholders, as well as the information provided.</p>
    </div>
  );
}



export default Cards;