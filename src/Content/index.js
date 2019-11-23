import React from 'react';
import './index.css';

const Content = ({ children, title }) => {

    return (
        <div className='content'>
            <div>
                <h2 className='contentTitle'> {title} </h2>
            </div>
            {children}
        </div>
    );
};

Content.propTypes = {

};

export default Content;
