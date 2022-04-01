import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <nav>
            {/* <h2>Welcome to my website</h2> */}
            <CustomLink to='/orderReview'>Order Review</CustomLink>
            <CustomLink to='/home'> Home </CustomLink>
        </nav>
    );
};

export default Header;