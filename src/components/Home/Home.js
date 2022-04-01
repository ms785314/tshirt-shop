import React from 'react';
import useTShirts from '../../hooks/useTShirt';
import TShirt from '../tShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tShirts,setTShirts] = useTShirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt  tShirt={tShirt} key={tShirt._id}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <h1>Cart container here</h1>
            </div>
        </div>
    );
};

export default Home;