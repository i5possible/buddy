import React from 'react';
import './Item.css';


const Item = ({ task, onClick }) => {

    return (
        <div className='item-wrapper'>
            <button className={task.completed ? 'text-button checked' : 'text-button'}
                onClick={() => onClick(task)}> 
                {task.name} 
            </button>
        </div>
    );
}

export default Item;
