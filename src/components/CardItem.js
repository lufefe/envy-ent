import React from 'react';

function CardItem(props) {
  return (
    <>

      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img alt='Team pics' src={props.src} className='cards__item__img'/>
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