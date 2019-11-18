import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const Navigation = () => <div className='nav-wrapper'>
    <div className='nav'>
        <li className='tab'>
            <Link to="/" className='link'>Home</Link>
        </li>
        <li className='tab'>
            <Link to="/mini-habit" className='link'>Mini Habit</Link>
        </li>
        <li className='tab'>
        </li>
        <li className='tab'>
        </li>
    </div>
</div>;

const Icon = () => <img src='logo192.png' className='logo' alt='BUDDY'></img>

const Header = ({ }) => {


    return (
        <div className='header' >
            <div className='header-content'>
                <Icon />
                <Navigation />
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;
