import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const Header = ({ }) => {
    const navigation = <ul className='nav'>
        <li className='tab'>
            <Link to="/" className='link'>Home</Link>
        </li>
        <li className='tab'>
            <Link to="/mini-habit" className='link'>Mini Habit</Link>
        </li>
    </ul>;
    return (
        <div className='header' >
            { navigation }
        </div>
    );
};

Header.propTypes = {

};

export default Header;
