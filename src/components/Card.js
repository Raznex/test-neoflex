import React from 'react';
import Rate from '../images/rate.svg'


const Card = () => {
    return (
        <article className="card">
            <img src="" alt="" className='card__photo'/>
            <div className="card__info">
                <p className="card__title">Apple AirPods</p>
                <p className="card__price">9527 &#8381;
                </p>
                <div className="card__rate">
                    <img src={Rate} alt="Оценка" className="card__image-rate"/>
                    <p className="card__rate-number">4,7</p>
                </div>
                <button className="card__button-buy">Купить</button>
            </div>
        </article>
    );
};

export default Card;