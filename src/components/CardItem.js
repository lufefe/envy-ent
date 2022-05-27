import React from 'react';

function CardItem(props) {
  return (
    <>

      <li className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap'>
            <a href={props.path} target="_blank" rel="noreferrer"> <img className='cards__item__img' alt='Board of Directors pictures' src={props.src}/></a>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h6 className='cards__item__label'>{props.label}</h6>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;