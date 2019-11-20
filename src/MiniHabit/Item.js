import React from 'react';
import './Item.css';

const Item = ({ name }) => {
    return (
        <>
            <input type='checkbox'></input>
            <lable> {name} </lable>
        </>
    );
}

export default Item;
