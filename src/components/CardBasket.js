import React from 'react';

const CardBasket = ({card}) => {
    // const [sum, setSum] = React.useState(0)

    return (
            <div className="product__container">
                <button className="product__trash"/>
                <div className="product__description">
                    <img src={card?.img} alt="" className="product__image"/>
                    <div className="product__about">
                        <p className="product__title">{card?.title}</p>
                        <p className="product__price">{card?.price} &#8381;</p>
                    </div>
                </div>
                <div className="product__total-price">
                    <div className="product__addition">
                        <button className="product__button-minus"/>
                        <p className="product__num">1</p>
                        <button className="product__button-plus"/>
                    </div>
                    <p className="product__sum"> 2 927 &#8381;</p>
                </div>
            </div>
    );
};

export default CardBasket;