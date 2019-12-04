import React from 'react';
import './SubTitle.css';

const SubTitle = ({ title }) => {

    return (
        <div className='subTitleWrapper'>
            <span className='subTitle'> {title} </span>
        </div>
    );
};

SubTitle.propTypes = {

};

export default SubTitle;
