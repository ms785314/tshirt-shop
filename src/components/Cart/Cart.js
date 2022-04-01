import React from 'react';
import Selected from '../Selected/Selected';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>this is cart</h1>
            {
                cart.map(tShirt => <Selected tShirt={tShirt} key={tShirt._id}></Selected>)
            }
        </div>
    );
};

export default Cart;