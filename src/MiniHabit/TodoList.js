import React from 'react';
import './TodoList.css';
import Item from './Item';

const TodoList = ({ tasks, dispatch }) => {

    const onClick = (task) => {
        dispatch({
            type: 'check',
            task: task,
        });
    }

    return (
        <div className='tasks'>
            {tasks.map(task => (
                <Item key={task.name} onClick={onClick} task={task} />
            ))}
        </div>
    );
}

export default TodoList;
