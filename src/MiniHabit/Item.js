import React from 'react';
import './Item.css';

const Item = ({ name }) => {
    return (
        <div className='item-wrapper'>
            <input className='checkbox' type='checkbox'></input>
            <lable className='item-name'> {name} </lable>
        </div>
    );
}

export default Item;
