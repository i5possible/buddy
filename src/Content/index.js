import React from 'react';
import './index.css';

const Content = ({ children }) => {

    return (
        <div className='content'>
            {children}
        </div>
    );
};

Content.propTypes = {

};

export default Content;
