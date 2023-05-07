import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Basket from "./Basket";
import React from "react";
import {Routes, Route} from "react-router-dom";

function App() {
    const [basketCount, setBasketCount] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setBasketCount(basketCount + 1);
    };
    return (
        <div className="page">
            <Header basketCount={basketCount}/>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main addToBasketCount={addToCart}/>
                    }
                />
                <Route
                    path="/basket"
                    element={
                        <Basket onBasket={cartItems}/>
                    }
                />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
