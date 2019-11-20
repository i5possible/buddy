import React from 'react';
import './TodoList.css';
import Item from './Item';

const TodoList = ({ tasks }) => {
    return (
        <div className='tasks'>
            {tasks.map(task => (
                <Item name={task.name} />
            ))};
        </div>
    );
}

export default TodoList;
