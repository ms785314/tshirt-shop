import React, { createContext, useState } from 'react';
import useTShirts from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../tShirt/TShirt';
import './Home.css'

export const EventHandlerContext = createContext('xyz');
const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);
    const handleAddToCart = selectedItem => {

        const exists = cart.find(tShirts => tShirts._id === selectedItem._id);

        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }

        // console.log(cart);
    }

    const removeHandler = selectedItem => {
        // console.log(selectedItem);
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        console.log(rest);
        setCart(rest)
    }
    return (
        <EventHandlerContext.Provider value={{handleAddToCart,removeHandler}}>
            <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt  tShirt={tShirt} key={tShirt._id}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart container here</h3>
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </EventHandlerContext.Provider>
    );
};

export default Home;