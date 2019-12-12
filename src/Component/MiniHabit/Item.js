import React from 'react';
import './Item.css';


const Item = ({ item, onClick, onDeleteClick }) => {

    const frequencyMap = {
        'daily': 'D',
        'weekly': 'W',
        'monthly': 'M',
    }

    return (
        <div className='item-wrapper'>
            <span className="frequency">{frequencyMap[item.frequency]}</span> 
            <button className={item.completed ? 'text-button checked' : 'text-button'}
                onClick={() => onClick(item)}> 
                <span>{item.name}</span>
            </button>
            <span className="deleteIcon" onClick={() => onDeleteClick(item.id)}>X</span>
        </div>
    );
}

export default Item;
