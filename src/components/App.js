import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Basket from "./Basket";
import React from "react";
import {Routes, Route} from "react-router-dom";

function App() {
    const [count, setCount] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([]);
    const totalItemCount = cartItems.reduce((acc, item) => acc + item.count, 0);
    const addToCart = (item, count) => {
        setCartItems([...cartItems, { ...item, id: cartItems.length, count: count + 1, totalPrice: +item.price}]);
    };

    // console.log(`это ${count}`)
    return (<div className="page">
            <Header basketCount={totalItemCount}/>
            <Routes>
                <Route
                    path="/"
                    element={<Main addToBasketCount={addToCart} count={count}/>}
                />
                <Route
                    path="/basket"
                    element={<Basket cartItems={cartItems} setCartItems={setCartItems} count={count}
                                     setCount={setCount}/>}
                />
            </Routes>
            <Footer/>
        </div>);
}

export default App;
