import React from 'react';
import classNames from 'classnames'//引入classnames依赖库
import './index.css';
import { withRouter, Link } from "react-router-dom";


const Navigation = ({history}) => {
    const currentPath = history.location.pathname;

    const tabs = [
        { name: 'Home', link: '/'},
        { name: 'Habit', link: '/habit',className:'link',},
        { name: 'Memory', link: '/memory',className:'link',},
        { name: 'Principle', link: '/principle',className:'link',},
    ]
    return (<div className='nav-wrapper'>
        {tabs.map( tab => {
            console.log(currentPath);
            return <li key={tab.name} className='tab'>
                <Link to={tab.link} className={
                    classNames({ 'link': true, 'selected': currentPath === tab.link })
                    }>{tab.name}</Link>
            </li>
        })}
    </div>)
};

const Icon = () => <img src='buddy.png' className='logo' alt='buddy'></img>

const Header = ({history}) => {
    return (
        <div className='header' >
            <div className='header-content'>
                <Icon />
                <Navigation history={history}/>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default withRouter(Header);
