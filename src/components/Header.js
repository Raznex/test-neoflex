import React from 'react';

const Header = () => {
    return (
            <header className="header">
                <h1 className="header__title">QPICK</h1>
                <div className="header__icon-container">
                    <button className="header__like">
                        <div className="header__like-counter">
                            1
                        </div>
                    </button>
                    <button className="header__basket">
                        <div className="header__basket-counter">
                            1
                        </div>
                    </button>
                </div>
            </header>
    );
};

export default Header;