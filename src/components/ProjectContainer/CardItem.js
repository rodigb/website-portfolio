import React from 'react'
import { Link } from 'react-router-dom'

 
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.label} >
              
              
            <Link to = {props.path3}><img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
              
            />
            
            </Link>
          </figure>
          <div className='cards__item__info'>
              
            <h3 className='cards__item__text'>{props.text}</h3>
            <div className="cards__buttons" >
                
                {/* <Link to ={props.path}><button className="source__button"></button></Link> */}
                <Link to ={props.path}><button className="source__button" > <i className="fab fa-github fa-lg"></i></button></Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
 