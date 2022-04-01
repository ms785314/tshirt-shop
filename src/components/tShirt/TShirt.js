import React from 'react';
import './Tshirt.css'
const TShirt = (props) => {
    // console.log(props);
    const {picture,price,name} = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};

export default TShirt;