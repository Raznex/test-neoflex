import React from 'react';
import CardBasket from "./CardBasket";
import {Link} from "react-router-dom";

const Basket = ({onBasket}) => {
    return (
        <div className='basket'>
            <div className="basket__contents">
            <p className="basket__title">Корзина</p>
            <Link to='/' className="basket__back">Назад &#8594;</Link>
            </div>
            <div className="basket__container">
                <div className="product">
                    {onBasket.map((headphone, index) => (
                        <CardBasket key={index} card={headphone}/>
                    ))}
                </div>
                <div className="basket__total">
                    <div className="basket__info">
                        <p className="basket__name">ИТОГО</p>
                        <p className="basket__price">&#8381; 2 927</p>
                    </div>
                    <button className="basket__button-continue">Перейти к оформлению</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;