import React, { useContext } from 'react';
import { EventHandlerContext } from '../Home/Home';
import './Selected.css'
const Selected = ({tShirt}) => {
    const {removeHandler,btnStyle} = useContext(EventHandlerContext);
    const {name,picture} = tShirt;
    return (
        <div className='selected'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <button onClick={()=> removeHandler(tShirt)} style={btnStyle}>X</button>
        </div>
    );
};

export default Selected;