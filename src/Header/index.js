import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const Navigation = () => <div className='nav-wrapper'>
    <div className='nav'>
        <li className='tab'>
            <Link to="/" className='link'>Home</Link>
        </li>
        <li className='tab'>
            <Link to="/habit" className='link'>Habit</Link>
        </li>
        <li className='tab'>
            <Link to='/memory' className='link'>Memory</Link>
        </li>
        <li className='tab'>
            <Link to='/principle' className='link'>Principle</Link>
        </li>
    </div>
</div>;

const Icon = () => <img src='buddy.png' className='logo' alt='buddy'></img>

const Header = () => {
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
