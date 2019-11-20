import React from 'react';
import './Item.css';

const Item = ({ name }) => {
    return (
        <>
            <input className='checkbox' type='checkbox'></input>
            <lable className='item-name'> {name} </lable>
        </>
    );
}

export default Item;
