import React from 'react';
import './Item.css';


const Item = ({ item, onClick, onDeleteClick }) => {
    return (
        <div className='item-wrapper'>
            <button className={item.completed ? 'text-button checked' : 'text-button'}
                onClick={() => onClick(item)}> 
                {item.name} 
            </button>
            <span className="deleteIcon" onClick={() => onDeleteClick(item.id)}>X</span>
        </div>
    );
}

export default Item;
