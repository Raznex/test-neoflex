import React from 'react';
import Card from "./Card";

const Main = () => {
    return (
        <main className='content'>
            <section className="headphones">
                <h2 className="headphones__title">Наушники</h2>
                <div className="headphones__container">
                    <Card/>
                </div>
            </section>
            <section className="headphones headphones_type_TW">
                <h2 className="headphones__title">Беспроводные наушники</h2>
                <div className="headphones__container">
                    <Card/>
                </div>
            </section>

        </main>
    );
};

export default Main;