import React from 'react';
import Rate from '../images/rate.svg'


const Card = ({card, onAddCount, count}) => {
    const [isAddedToCart, setIsAddedToCart] = React.useState(false);
    const handleAddToCartClick = () => {
        onAddCount(count);
        setIsAddedToCart(true);
    };
    return (
        <article className="card">
            <img src={card?.img} alt="" className='card__photo'/>
            <div className="card__info">
                <p className="card__title">{card?.title}</p>
                <p className="card__price">{card?.price} &#8381;
                </p>
                <div className="card__rate">
                    <img src={Rate} alt="Оценка" className="card__image-rate"/>
                    <p className="card__rate-number">{card?.rate}</p>
                </div>
                <button className={`card__button-buy ${isAddedToCart ? "in-cart" : ""}`} onClick={handleAddToCartClick} disabled={isAddedToCart}>{isAddedToCart ? 'В корзине' : 'Купить'}</button>
            </div>
        </article>
    );
};

export default Card;