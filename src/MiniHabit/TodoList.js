import React from 'react';
import './TodoList.css';
import Item from './Item';

const TodoList = ( {tasks}) => {
    return (
        <div>
            <Item name='First Item'></Item>
        </div>
    );
}

export default TodoList;
