import React, { useContext } from 'react';
import { EventHandlerContext } from '../Home/Home';
import './Tshirt.css'
const TShirt = ({tShirt}) => {
    // console.log(props);
    const {handleAddToCart} = useContext(EventHandlerContext)
    const {picture,price,name} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;