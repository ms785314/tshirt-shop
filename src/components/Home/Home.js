import React, { createContext, useEffect, useState } from 'react';
import useTShirts from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import { clearDataFromFakeDb, getDataFromFakeDb, removeItemFromFakeDb, setDataTofakeDb } from '../fakeDb/fakeDb';
import TShirt from '../tShirt/TShirt';
import './Home.css'

export const EventHandlerContext = createContext('xyz');
const Home = () => {
    const btnStyle = {fontSize:'30px',borderRadius:'50%',height:'50px',width:'50px',border:'none',background:'pink'};
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);
    const handleAddToCart = selectedItem => {

        const exists = cart.find(tShirts => tShirts._id === selectedItem._id);

        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        // console.log(cart);
        setDataTofakeDb(selectedItem._id);
    }

    useEffect(() =>{
        const getCart = getDataFromFakeDb(tShirts);
        if(getCart){
            setCart(getCart)
        }
        // console.log(getCart);
    },[tShirts])
    const removeHandler = selectedItem => {
        // console.log(selectedItem);
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        // console.log(rest);
        setCart(rest)
        removeItemFromFakeDb(selectedItem._id)
    }

    const clearCart = () =>{
        setCart([]);
        clearDataFromFakeDb()
    }

    return (
        <EventHandlerContext.Provider value={{handleAddToCart,removeHandler,btnStyle}}>
            <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt  tShirt={tShirt} key={tShirt._id}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <h3>Cart container here</h3>
                <Cart cart={cart}></Cart>
                <button onClick={clearCart}>Clear All</button>
            </div>
        </div>
        </EventHandlerContext.Provider>
    );
};

export default Home;